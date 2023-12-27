import {headers} from 'next/headers';
import type Stripe from 'stripe';

import {stripe} from '~/lib/stripe';
import {addMemberToTrello, createTrelloBoard} from '~utils/trello';

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

    const session = event.data.object as any;

    if (event.type === 'checkout.session.completed') {
        console.log('Creating Trello board...');

        console.log(
            session.customer_details?.name,
            session.customer_details?.email,
            session.customer_details?.name && session.customer_details.email,
        );

        if (session.customer_details?.name && session.customer_details.email) {
            await createTrelloBoard(session.customer_details.name).then((id) => {
                const bodyData = {fullName: session.customer_details?.name};
                if (id) {
                    addMemberToTrello(id, session.customer_details.email, bodyData);
                }
            });
        }
    }

    return new Response(null, {status: 200});
}
