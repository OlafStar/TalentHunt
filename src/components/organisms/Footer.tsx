import Link from 'next/link';

import Logo from '~components/atoms/Logo';

const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-80 text-white py-12 relative z-[3]">
            <div className="container flex gap-12 md:gap-4 flex-col md:flex-row justify-between items-center">
                <Logo />
                <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                    {'hello@talenthunting.co'}
                </Link>
                <div className="flex gap-2 sm:gap-8 text-sm">
                    <Link href="/#pricing">{'Pricing'}</Link>
                    <Link href="/jobs">{'Career'}</Link>
                    <Link href="/privacy-policy">{'Privacy'}</Link>
                    <Link href="/terms">{'Terms of use'}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
