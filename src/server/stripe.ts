'use server';

import {redirect} from 'next/navigation';

import {stripe} from '~lib/stripe';

const DOMAIN = process.env.DOMAIN || 'http://localhost:3000';

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
        success_url: `${DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${DOMAIN}?canceled=true`,
    });

    if (session.url) {
        redirect(session.url);
    }
};
