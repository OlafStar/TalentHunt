const TextSection = () => {
    return (
        <section className="flex items-center justify-center py-60">
            <div className="flex flex-col gap-4 text-center max-w-[690px]">
                <div>
                    <p className="text-4xl sm:text-6xl font-semibold">
                        {`Wondering if `}
                    </p>
                    <p className="text-4xl sm:text-6xl font-semibold">
                        <span className="bg-clip-text text-transparent bg-text-gradient">
                            {'TalentHunting is for you'}
                        </span>
                    </p>
                </div>
                <p className="text-xlsm:text-3xl">
                    <span className="bg-clip-text text-transparent bg-text-gradient font-semibold">{`Just contact us `}</span>
                    {`and get more details how our service will help your business.`}
                </p>
            </div>
        </section>
    );
};

export default TextSection;
