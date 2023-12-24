const BenefitsSection = () => {
    return (
        <section className="py-20 flex flex-col justify-center items-center gap-16">
            <p className="font-bold text-4xl md:text-7xl text-center max-w-[800px]">
                {'TalentHunt replace all expensive agencies'}
            </p>
            <div className="grid grid-cols-2">
                <div></div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl text-[32px] font-bold">
                            {'Don’t have time for call’s?'}
                        </p>
                        <p className="text-2xl">
                            {
                                'Describe what you need when requesting a new hunt. We only call in emergencies or on request.'
                            }
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl text-[32px] font-bold">{'Satisfy guarantee'}</p>
                        <p className="text-2xl">
                            {
                                'We guarantee to find the best candidate for your position and work until you are fully satisfied.'
                            }
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl text-[32px] font-bold">
                            {'Invite unlimited members'}
                        </p>
                        <p className="text-2xl">
                            {
                                'Invite everyone from your team to make them updated with our work.'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
