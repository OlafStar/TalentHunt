import PricingButton from '~components/atoms/PricingButton';

const SubscriptionSection = () => {
    return (
        <section id="pricing" className="py-20 flex flex-col gap-20">
            <div className="w-full flex gap-16 justify-around flex-wrap">
                <div className="bg-white bg-opacity-80 w-full max-w-[430px] flex flex-col items-center p-8 border border-mainBlue rounded-lg gap-6 shadow-lg relative overflow-hidden">
                    <div className="bg-mainBlue text-white w-[200px] absolute flex items-center justify-center p-1 font-semibold rotate-[-45deg] left-[-50px]">
                        {'POPULAR'}
                    </div>
                    <div className="text-2xl font-bold">{'Standard'}</div>
                    <div className="text-center flex flex-col w-full">
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'1 active recruitment at time'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Satisfy guarantee.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Infinite team members.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Pause or cancel any time.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Initial technical checks.'}
                        </div>
                        <div className=" py-3">
                            {'Candidates from our talent base'}
                        </div>
                    </div>
                    <div className="flex-1" />
                    <div className="text-5xl font-bold text-mainBlue">
                        {'999$/m'}
                    </div>
                    <PricingButton
                        lookup="standard_talenthunt_price"
                        className="w-full rounded-full bg-mainBlue text-white text-2xl font-bold p-4 mt-6 shadow-lg"
                    >
                        {'Start today'}
                    </PricingButton>
                </div>
                <div className="bg-white bg-opacity-80 w-full max-w-[430px] flex flex-col items-center p-8 border border-mainBlue border-opacity-20 rounded-lg  gap-6 shadow-lg">
                    <div className="text-2xl font-bold">{'Platinum'}</div>
                    <div className="text-center flex flex-col w-full">
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'3 active recruitments at time'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Satisfy guarantee.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Infinite team members.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Pause or cancel any time.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Detailed technical checks.'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Candidates from our talent base'}
                        </div>
                        <div className="border-b border-b-black border-opacity-10 py-3">
                            {'Quicker recruitment process.'}
                        </div>

                        <div className="py-3">
                            {'Priority for candidates from our talent base.'}
                        </div>
                    </div>
                    <div className="text-5xl font-bold text-mainBlue">
                        {'1999$/m'}
                    </div>

                    <PricingButton
                        lookup="platinum_talenthunt_price"
                        className="w-full rounded-full bg-mainBlue text-white text-2xl font-bold p-4 mt-6 shadow-lg"
                    >
                        {'Start today'}
                    </PricingButton>
                </div>
            </div>
            <div className="flex justify-around flex-wrap gap-20">
                <div className="flex flex-col gap-4 max-w-[400px]">
                    <div className="text-xl font-bold">{'Have Questions?'}</div>
                    <div>
                        {
                            'Learn more about how TalentHunt work and how we can help your business'
                        }
                    </div>
                    <div className="font-medium">{'Book a call'}</div>
                </div>
                <div className="flex flex-col gap-4 max-w-[400px]">
                    <div className="text-xl font-bold">
                        {'Refer a friend & earn'}
                    </div>
                    <div>
                        {'Earn 5% monthly recurring commissions for each referral.'}
                    </div>
                    <div className="font-medium">{'Join us now'}</div>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;
