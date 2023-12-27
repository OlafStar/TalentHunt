import FaqItem from '~components/atoms/FaqItem';
import {Accordion} from '~components/ui/accordion';
import {faq} from '~config/faq';

const FaqSection = () => {
    return (
        <section id="faq"className="flex flex-col gap-10 sm:gap-20 justify-center items-center py-20">
            <div className="font-bold text-6xl">{'FAQ'}</div>

            <div className="max-w-[750px] w-full">
                <Accordion type="single" collapsible className="w-full">
                    {faq.map((item, index) => (
                        <FaqItem value={`item-${index}`} key={index} question={item.question}>
                            {item.answer}
                        </FaqItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FaqSection;
