import {PropsWithChildren} from 'react';

import {createStripeSession} from '~server/stripe';
import {PropsWithClassname} from '~types/general';

const PricingButton = ({
    children,
    className,
    lookup,
}: PropsWithChildren & PropsWithClassname & {lookup: string}) => {
    const submit = async () => {
        'use server';
        await createStripeSession(lookup);
    };

    return (
        <form action={submit} className={className}>
            <button type="submit">{children}</button>
        </form>
    );
};

export default PricingButton;
