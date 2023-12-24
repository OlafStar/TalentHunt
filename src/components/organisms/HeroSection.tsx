const HeroSection = () => {
    return (
        <section className="flex items-center justify-center h-[100vh]">
            <div className="flex flex-col justify-center items-center gap-8 p-4">
                <span className="text-5xl xs:text-7xl text-center font-bold max-w-[750px]">
                    {'Talent hunt outsourcing service'}
                </span>
                <span className="text-xl text-center font-medium max-w-[435px]">
                    {
                        'Recruitment subscription for your business. Pause or cancel at any time.'
                    }
                </span>
                <button className="mt-12 font-bold py-4 px-16 bg-mainBlue text-white rounded-full">{'SEE PLANS'}</button>
            </div>
        </section>
    );
};

export default HeroSection;
