'use client';
import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {menuSlide} from '~utils/anim';

import {links} from './Navigation';

const HamburgerMenu = ({close}: {close: () => void}) => {
    const pathname = usePathname();
    const mainPath = pathname === '/' ? pathname : '/';
    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="sm:hidden h-full  w-full bg-white fixed top-0 right-0 z-[9998]"
        >
            <div className="h-full w-full py-24 flex flex-col container">
                <div className="flex flex-col h-full items-center justify-around text-3xl">
                    {links.map((item, index) => {
                        return (
                            <Link
                                href={
                                    item.link.includes('#')
                                        ? `${mainPath}${item.link}`
                                        : item.link
                                }
                                scroll={item.link.includes('#')}
                                onClick={close}
                                key={index}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default HamburgerMenu;
