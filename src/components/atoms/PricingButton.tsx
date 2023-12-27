'use client';

import {Loader2} from 'lucide-react';
import {PropsWithChildren, useState} from 'react';

import {createStripeSession} from '~server/stripe';
import {PropsWithClassname} from '~types/general';

const PricingButton = ({
    children,
    className,
    lookup,
}: PropsWithChildren & PropsWithClassname & {lookup: string}) => {
    const [isLoading, setIsLoading] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        await createStripeSession(lookup);
        setIsLoading(false);
    };

    return (
        <>
            <form
                action={submit}
                id={lookup}
                name={lookup}
                className='hidden'
                style={{visibility: 'hidden'}}
            ></form>
            <button form={lookup} className={className} type="submit">
                {isLoading ? (
                    <Loader2 className="mr-4 h-4 w-4 animate-spin" />
                ) : null}
                {children}
            </button>
        </>
    );
};

export default PricingButton;
