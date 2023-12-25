import {PropsWithChildren} from 'react';

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~components/ui/accordion';

type FaqItemProps = {
    value: string;
    question: string;
} & PropsWithChildren;

const FaqItem = ({value, question, children}: FaqItemProps) => {
    return (
        <AccordionItem value={value} className='w-full border-b-black mt-[24px]'>
            <AccordionTrigger className='font-medium sm:text-3xl text-left'>{question}</AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    );
};

export default FaqItem;
