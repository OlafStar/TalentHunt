const DescriptionsSection = () => {
    return (
        <section className="py-[120px] flex flex-col gap-20 ">
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl sm:text-5xl 2xl:text-7xl max-w-[550px] 2xl:max-w-[800px]">
                    {`Find your `}
                    <span className="bg-clip-text text-transparent bg-text-gradient">{`next leaders `}</span>
                    {`with our services`}
                </p>
                <p className=" sm:text-xl 2xl:text-2xl max-w-[540px] 2xl:max-w-[700px]">
                    {
                        'Let us handle full process or just part of your recruitment. We will find the employee that fits your needs.'
                    }
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:self-end sm:text-right">
                <p className="font-bold text-2xl sm:text-5xl 2xl:text-7xl max-w-[550px] 2xl:max-w-[750px]">
                    <span className="bg-clip-text text-transparent bg-text-gradient">{`Save `}</span>
                    {`time and `}
                    <span className="bg-clip-text text-transparent bg-text-gradient">{`money `}</span>
                    {`by working `}
                    <span className="bg-clip-text text-transparent bg-text-gradient">{'with us'}</span>
                </p>

                <p className="sm:text-xl 2xl:text-2xl max-w-[540px] 2xl:max-w-[700px] sm:self-end">
                    {
                        'Let us handle full process or just part of your recruitment. We will find the employee that fits your needs.'
                    }
                </p>
            </div>
        </section>
    );
};

export default DescriptionsSection;
