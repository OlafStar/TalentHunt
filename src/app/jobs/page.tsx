import {DollarSign} from 'lucide-react';
import Link from 'next/link';

import {jobDescriptions} from '~config/jobs';

const Page = () => {
    return (
        <main className="flex flex-col gap-20 py-40 container z-[3] relative">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">{'Open job positions.'}</h1>
                <h2 className="text-xl font-medium">
                    {
                        'Browse open vacancies from the compoanies that are working with us'
                    }
                </h2>
            </div>
            <div className="w-full h-[1px] bg-black opacity-20" />
            <section className="flex flex-col gap-12">
                {jobDescriptions.map((item, index) => (
                    <Link
                        href={`/jobs/${item.id}`}
                        key={index}
                        className="p-6 sm:p-12 border border-mainBlue rounded-lg shadow-lg w-full flex flex-col md:flex-row gap-12 justify-between md:items-center"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="text-2xl sm:text-4xl font-semibold">
                                {item.title}
                            </div>
                            <div className="sm:text-2xl flex gap-2 items-center">
                                <DollarSign />
                                <div>{item.revenue}</div>
                            </div>
                        </div>
                        <div>
                            <button className="py-3 w-full sm:w-[250px] border border-black rounded-full sm:text-xl">
                                {'Read more'}
                            </button>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default Page;
