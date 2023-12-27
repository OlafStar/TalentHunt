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
