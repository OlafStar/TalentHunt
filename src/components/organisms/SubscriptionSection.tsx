import BentoBox from '~components/molecues/BentoBox';

const SubscriptionSection = () => {
    return (
        <section className="py-40">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[118px_117px_232px_232px_235px] gap-4">
                <BentoBox className="lg:col-span-2 font-bold text-2xl sm:text-3xl lg:text-5xl flex items-center justify-center p-4 lg:p-0">
                    {'Subscription Offers'}
                </BentoBox>
                <BentoBox className="lg:col-span-2 lg:row-span-2 p-6 flex flex-col justify-between">
                    <p className="text-xl sm:text-3xl font-semibold">
                        {'Have Questions?'}
                    </p>
                    <p className="sm:text-2xl max-w-[440px] py-6 lg:py-0">
                        {
                            'Learn more about how TalentHunt work and how we can help your business'
                        }
                    </p>
                    <p className="sm:text-2xl font-medium">{'Book a call'}</p>
                </BentoBox>
                <BentoBox className="lg:col-span-2 lg:row-span-2 py-4 px-6 flex flex-col justify-between relative">
                    <p className="text-3xl font-bold">{'Standard'}</p>
                    <div className="flex flex-col gap-3 sm:text-2xl py-6 lg:p-0">
                        <p>{'Unlimited requests.'}</p>
                        <p>{'Satisfy guarantee.'}</p>
                        <p>{'Team members.'}</p>
                        <p>{'Pause or cancel any time.'}</p>
                    </div>
                    <div className='mb-4 lg:mb-0 md:absolute text-mainBlue text-4xl sm:text-7xl font-bold md:right-[24px] md:top-[16px]'>{'999$/m'}</div>
                    <button className="p-5 w-100 bg-mainBlue text-xl sm:text-3xl font-medium text-white rounded-br-[17px] rounded-bl-[17px]">
                        {'Start today'}
                    </button>
                </BentoBox>
                <BentoBox className="grid-area-3 flex flex-col gap-2 justify-center items-center p-6 font-bold">
                    <p className="text-xl sm:text-2xl ">{'IT Talents'}</p>
                    <p className="text-mainBlue text-4xl sm:text-6xl">{'5000+'}</p>
                    <p className="text-xl sm:text-2xl">{'in our base'}</p>
                </BentoBox>
                <BentoBox className="grid-area-4 flex items-center justify-center p-4">
                    <p className="text-xl sm:text-2xl font-bold max-w-[190px] text-center">
                        {`We are `}
                        <span className="text-mainBlue">{`cheaper `}</span>{' '}
                        {`than one `}
                        <span className="text-mainBlue">{`HR employee`}</span>
                    </p>
                </BentoBox>
                <BentoBox className="lg:col-span-2 lg:row-span-2 py-4 px-6 flex flex-col justify-between relative">
                    <p className="text-3xl font-bold">{'Platinum'}</p>
                    <div className="flex flex-col gap-3 sm:text-2xl py-6 lg:p-0">
                        <p>{'Unlimited requests.'}</p>
                        <p>{'Satisfy guarantee.'}</p>
                        <p>{'Team members.'}</p>
                        <p>{'Pause or cancel any time.'}</p>
                        <p>{'Quicker recruitment process.'}</p>
                        <p>{'Priority for candidates from our talent base.'}</p>
                    </div>
                    <div className='mb-4 lg:mb-0 md:absolute text-mainBlue text-4xl sm:text-7xl font-bold md:right-[24px] md:top-[16px]'>{'1999$/m'}</div>
                    <button className="p-5 w-100 bg-mainBlue text-xl sm:text-3xl font-medium text-white rounded-br-[17px] rounded-bl-[17px]">
                        {'Start today'}
                    </button>
                </BentoBox>
                <BentoBox className="grid-area-5 p-4 flex items-center justify-center">
                    <p className="text-xl sm:text-2xl font-bold text-center">
                        {`Includes `}
                        <span className="text-mainBlue">{`technical interviews `}</span>
                        {`for IT and developers`}
                    </p>
                </BentoBox>
                <BentoBox className="grid-area-6 p-4 flex justify-center items-center">
                    <div className="flex flex-col text-center">
                        <p className="text-mainBlue font-bold text-2xl sm:text-3xl">
                            {'FIXED PRICE'}
                        </p>
                        <p className="font-medium text-xl sm:text-2xl">
                            {'Pay the same fixed price each month.'}
                        </p>
                    </div>
                </BentoBox>
                <BentoBox className="lg:col-span-2 p-6 flex flex-col justify-between">
                    <p className="text-xl sm:text-3xl font-semibold">
                        {'Refer a friend & earn'}
                    </p>
                    <p className="sm:text-2xl max-w-[440px] py-6 lg:p-0">
                        {'Earn 5% monthly recurring commissions for each referral.'}
                    </p>
                    <p className="sm:text-2xl font-medium">{'Join us now'}</p>
                </BentoBox>
            </div>
        </section>
    );
};

export default SubscriptionSection;
