'use server';

import {redirect} from 'next/navigation';

import {stripe} from '~lib/stripe';

export const createStripeSession = async (lookup: string) => {
    const prices = await stripe.prices.list({
        lookup_keys: [lookup],
        expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: prices.data[0].id,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.DOMAIN}/payment?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.DOMAIN}#pricing`,
    });

    if (session.url) {
        redirect(session.url);
    }
};
