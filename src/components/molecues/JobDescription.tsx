import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';

import {JobDescription} from '~config/jobs';

import ApplyForm from './ApplyForm';

const JobDescriptionComponent = ({
    title,
    location,
    positionOverview,
    keyResponsibilities,
    qualifications,
    benefits,
}: JobDescription) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-[3]">
        <div className="flex flex-col gap-8">
            <Link
                href="/jobs"
                className="flex gap-2 items-center text-mainBlue text-lg"
            >
                <ArrowLeft className="w-6 h-6" />
                {'Back'}
            </Link>
            <h1 className="text-4xl font-bold">{title}</h1>
            <h2>
                {'Location:'} {location}
            </h2>

            <section className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">{'Position Overview:'}</h3>
                <p>{positionOverview}</p>
            </section>

            <section className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">{'Key Responsibilities:'}</h3>
                <ul className="flex flex-col gap-1 list-disc pl-4">
                    {keyResponsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">{'Qualifications:'}</h3>
                <ul className="flex flex-col gap-1 list-disc pl-4">
                    {qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">{'Benefits:'}</h3>
                <ul className="flex flex-col gap-1 list-disc pl-4">
                    {benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
        <div>
            <ApplyForm jobName={title} />
        </div>
    </div>
);

export default JobDescriptionComponent;
