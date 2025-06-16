'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NavList from './navList';
import MobileNav from './mobileNav';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
    const [isVisible, setVisible] = useState(true);
    const prevScroll = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 512);
        };
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setVisible(currentScroll < prevScroll.current);
            prevScroll.current = currentScroll;
        };
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
            className={clsx(
                'transition-transform top-0 duration-300 sticky w-full p-4 bg-white',
                isVisible ? 'translate-y-0' : '-translate-y-full'
            )}>
            <main className='container flex items-center justify-between'>
                <Link href='/' className='font-semibold'>
                    Zanuarrasyidin<span className='text-xl font-black text-slate-500'>.</span>
                </Link>
                {isMobile === false && <MobileNav />}
                {isMobile && <NavList />}
            </main>
        </nav>
    );
};

export default Navbar;
