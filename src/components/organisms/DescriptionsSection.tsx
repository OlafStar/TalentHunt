const DescriptionsSection = () => {
    return (
        <section className="py-[120px] flex flex-col gap-20">
            <div className="flex flex-col gap-4">
                <p className="font-bold text-4xl sm:text-6xl max-w-[700px]">
                    {`Find your `}
                    <span className="text-mainBlue">{`next leaders `}</span>
                    {`with our services`}
                </p>
                <p className="text-2xl sm:text-3xl max-w-[540px]">
                    {
                        'Let us handle full process or just part of your recruitment. We will find the employee that fits your needs.'
                    }
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:self-end sm:text-right">
                <p className="font-bold text-4xl sm:text-6xl max-w-[700px]">
                    <span className="text-mainBlue">{`Save `}</span>
                    {`time and `}
                    <span className="text-mainBlue">{`money `}</span>
                    {`by working `}
                    <span className="text-mainBlue">{'with us'}</span>
                </p>

                <p className="text-2xl sm:text-3xl max-w-[540px] sm:self-end">
                    {
                        'Let us handle full process or just part of your recruitment. We will find the employee that fits your needs.'
                    }
                </p>
            </div>
        </section>
    );
};

export default DescriptionsSection;
