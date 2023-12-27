'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import Logo from '~components/atoms/Logo';

import HamburgerMenu from './HamburgerMenu';

export const links = [
    {link: '#benefits', name: 'Benefits'},
    {link: '#pricing', name: 'Pricing'},
    {link: '#faq', name: 'FAQs'},
];

const Navigation = () => {
    const pathname = usePathname();
    const mainPath = pathname === '/' ? pathname : '/';

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [bgColor, setBgColor] = useState('transparent');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const lineVariants = {
        closed: {width: 32, opacity: 1},
        open: {width: 0, opacity: 0},
    };

    const topLineVariants = {
        closed: {rotate: 0, translateY: 0},
        open: {rotate: 45, translateY: 13},
    };

    const bottomLineVariants = {
        closed: {rotate: 0, translateY: 0},
        open: {rotate: -45, translateY: -13},
    };

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            setIsScrolling(true);

            const scrolledPast100vh = window.scrollY > window.innerHeight;
            setBgColor(scrolledPast100vh ? 'white' : 'transparent');

            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 65);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{y: 0}}
                animate={{
                    y: isScrolling ? -200 : 0,
                    backgroundColor: bgColor,
                }}
                transition={{
                    y: {type: 'tween'},
                }}
                className="fixed top-0 z-[9999] w-full"
            >
                <div className="container flex justify-between items-center gap-4 py-4">
                    <Logo />
                    <div className="hidden sm:flex w-full max-w-[400px] justify-between items-center">
                        {links.map((item, index) => {
                            return (
                                <Link
                                    href={
                                        item.link.includes('#')
                                            ? `${mainPath}${item.link}`
                                            : item.link
                                    }
                                    scroll={item.link.includes('#')}
                                    key={index}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <Link
                        href={`https://${
                            process.env.NEXT_PUBLIC_MANAGE_LOGIN_LINK || ''
                        }`}
                        className="hidden sm:flex justify-center items-center font-bold py-3 w-[200px] bg-mainBlue text-white rounded-full"
                    >
                        {'Login'}
                    </Link>

                    <div
                        className="flex flex-col gap-3 cursor-pointer sm:hidden"
                        onClick={toggleMenu}
                    >
                        <motion.div
                            className="w-[32px] h-[1px] bg-black"
                            variants={topLineVariants}
                            animate={isOpen ? 'open' : 'closed'}
                        />
                        <motion.div
                            className="w-[32px] h-[1px] bg-black"
                            variants={lineVariants}
                            animate={isOpen ? 'open' : 'closed'}
                        />
                        <motion.div
                            className="w-[32px] h-[1px] bg-black"
                            variants={bottomLineVariants}
                            animate={isOpen ? 'open' : 'closed'}
                        />
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence mode="wait">
                {isOpen && <HamburgerMenu close={toggleMenu} />}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
