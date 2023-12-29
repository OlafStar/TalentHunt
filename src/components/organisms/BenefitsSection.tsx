import {Cpu, InfinityIcon, PhoneOff, PiggyBank, Smile} from 'lucide-react';

const BenefitsSection = () => {
    return (
        <section
            id={'benefits'}
            className="py-20 pt-40 flex flex-col justify-center items-center gap-20 relative"
        >
            <p className="font-bold text-3xl md:text-5xl text-center max-w-[800px]">
                {'TalentHunting replace all expensive agencies'}
            </p>
            <div className="flex sm:justify-around gap-16 flex-wrap">
                <div className="flex flex-col gap-2">
                    <PhoneOff className="w-12 h-12" />
                    <div className="font-bold text-2xl">
                        {'Don’t have time for call’s?'}
                    </div>
                    <div className="max-w-[260px]">
                        {
                            'Describe what you need when requesting a new hunt. We only call in emergencies or on request.'
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Smile className="w-12 h-12" />
                    <div className="font-bold text-2xl">{'Satisfy guarantee'}</div>
                    <div className="max-w-[260px]">
                        {
                            'We guarantee to find the best candidate for your position and work until you are fully satisfied.'
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <InfinityIcon className="w-12 h-12" />
                    <div className="font-bold text-2xl">
                        {'Invite unlimited members'}
                    </div>
                    <div className="max-w-[260px]">
                        {
                            'Invite everyone from your team to make them updated with our work.'
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <PiggyBank className="w-12 h-12" />
                    <div className="font-bold text-2xl">
                        {'Cheaper than HR employee'}
                    </div>
                    <div className="max-w-[260px]">
                        {
                            'Avoid burning your money when you dont have enough work for empoloyee. We are cheaper and u can pause your subscribtion.'
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Cpu className="w-12 h-12" />
                    <div className="font-bold text-2xl">
                        {'Technical interviews'}
                    </div>
                    <div className="max-w-[260px]">
                        {
                            'For technical positions, we also offer technical checks by experienced partners.'
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
