import Link from 'next/link';
import {Anton} from 'next/font/google';

const anton = Anton({weight: '400', subsets: ['latin']});

const HeroSection = () => {
    return (
        <section className="flex items-center justify-center h-[100vh]">
            <div className="flex flex-col items-center justify-center">
                <div
                    className={`${anton.className} flex flex-col items-center justify-center text-[192px] leading-[100%]`}
                >
                    <span className="bg-clip-text text-transparent bg-text-gradient">
                        {'TALENT'}
                    </span>
                    <span>{'HUNTING'}</span>
                </div>
                <span className="text-xl text-center font-medium max-w-[435px] mt-[24px]">
                    {
                        'Recruitment subscription for your business. Pause or cancel at any time.'
                    }
                </span>
                <Link
                    href="#pricing"
                    className="w-fit mt-8 font-bold py-4 px-16 bg-text-gradient hover:bg-mainBlue transition-all ease-in-out text-white rounded-full"
                >
                    {'See plans'}
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
