import {headers} from 'next/headers';
import type Stripe from 'stripe';

import {stripe} from '~/lib/stripe';

export async function POST(request: Request) {
    const body = await request.text();
    const signature = headers().get('Stripe-Signature') ?? '';

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET || '',
        );
    } catch (err) {
        return new Response(
            `Webhook Error: ${err instanceof Error ? err.message : 'Unknown Error'}`,
            {status: 400},
        );
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (!session?.metadata?.userId) {
        return new Response(null, {
            status: 200,
        });
    }

    if (event.type === 'checkout.session.completed') {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string,
        );

        const customer = await stripe.customers.retrieve(
            subscription.customer as string,
        );

        try {
            fetch(
                `https://api.trello.com/1/boards/?name=${
                    customer && 'name' in customer ? customer.name : subscription.id
                }&key=${process.env.TRELLO_API}&token=${process.env.TRELLO_TOKEN}`,
                {
                    method: 'POST',
                },
            );
        } catch (err) {
            console.log(err);
        }
    }

    // if (event.type === 'invoice.payment_succeeded') {

    // }

    // if (event.type === 'customer.subscription.deleted') {
    //     // Retrieve the subscription details from Stripe.
    //     const subscription = event.data.object as Stripe.Subscription;

    //     fetch(
    //         'https://api.trello.com/1/lists/{id}/closed?key=APIKey&token=APIToken',
    //         {
    //             method: 'PUT',
    //         },
    //     )
    //         .then((response) => {
    //             console.log(`Response: ${response.status} ${response.statusText}`);
    //             return response.text();
    //         })
    //         .then((text) => console.log(text))
    //         .catch((err) => console.error(err));
    // }

    return new Response(null, {status: 200});
}
