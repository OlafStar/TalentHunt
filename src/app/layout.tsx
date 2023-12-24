import type {Metadata} from 'next';

import '~/styles/globals.css';
import SiteBackground from '~components/organisms/SiteBackground';
import {generalSans} from '~fonts/generalSans';

export const metadata: Metadata = {
    title: 'TalentHunt - Recruitment as a Service',
    description: 'TalentHunt - Recruitment as a Service',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${generalSans.className} bg-[#FAFAF9]`}>
                {children}
                <SiteBackground />
            </body>
        </html>
    );
}
