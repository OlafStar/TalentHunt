import {MetadataRoute} from 'next';

import {jobDescriptions} from '~config/jobs';

export default function sitemap(): MetadataRoute.Sitemap {
    const jobs = jobDescriptions.map((job) => ({
        url: `https://talenthunting.co/jobs/${job.id}`,
        lastModified: new Date(), 
        changeFrequency: 'monthly', 
        priority: 0.6, 
    }));
    return [
        {
            url: 'https://talenthunting.co',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://talenthunting.co/jobs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://talenthunting.co/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        //@ts-expect-error
        ...jobs,
    ];
}
