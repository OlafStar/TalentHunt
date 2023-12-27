import type {Metadata} from 'next';

import '~/styles/globals.css';
import Navigation from '~components/molecues/Navigation';
import SiteBackground from '~components/organisms/SiteBackground';
import {generalSans} from '~fonts/generalSans';

export const metadata: Metadata = {
    title: 'TalentHunting - Recruitment as a Service',
    description:
        'TalentHunt - Recruitment as a service. Let us handle your recruitment process and find the best talent for your company. All in a subscription model cheaper than an HR employee.',
    icons: {
        icon: '/next.svg',
    },
    openGraph: {
        title: 'TalentHunting - Recruitment as a Service',
        description:
            'TalentHunt - Recruitment as a service. Let us handle your recruitment process and find the best talent for your company. All in a subscription model cheaper than an HR employee.',
        url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}opg.jpg`,
                width: 800,
                height: 600,
                alt: 'TalentHunting - Recruitment as a Service',
            },
            {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}opg.jpg`,
                width: 1800,
                height: 1600,
                alt: 'TalentHunting - Recruitment as a Service',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        title: 'TalentHunting - Recruitment as a Service',
        description:
            'TalentHunt - Recruitment as a service. Let us handle your recruitment process and find the best talent for your company. All in a subscription model cheaper than an HR employee.',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}opg.jpg`,
                width: 800,
                height: 600,
                alt: 'TalentHunting - Recruitment as a Service',
            },
            {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}opg.jpg`,
                width: 1800,
                height: 1600,
                alt: 'TalentHunting - Recruitment as a Service',
            },
        ],
    },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${generalSans.className} bg-[#FAFAF9]`}>
                <Navigation />
                {children}
                <SiteBackground />
            </body>
        </html>
    );
}
