import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';
import { siteConfig } from '@/config/site';
import Navbar from '@/component/navbar';
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: '%s',
    },
    description: siteConfig.description,
    // openGraph: {
    //     title: siteConfig.title,
    //     description: siteConfig.description,
    //     url: siteConfig.url,
    //     siteName: siteConfig.title,
    //     locale: 'en-US',
    //     type: 'website',
    //     images: [
    //         {
    //             url: siteConfig.ogImage,
    //         },
    //     ],
    // },
    // twitter: {
    //     title: siteConfig.title,
    //     description: siteConfig.description,
    //     images: siteConfig.ogImage,
    //     card: 'summary_large_image',
    // },
    // robots: {
    //     index: true,
    //     follow: true,
    //     googleBot: {
    //         index: true,
    //         follow: true,
    //         noimageindex: true,
    //         'max-video-preview': -1,
    //         'max-image-preview': 'large',
    //         'max-snippet': -1,
    //     },
    // },
    // alternates: {
    //     canonical: siteConfig.url,
    // },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${plusJakarta.className} antialiased bg-gray-100 text-zinc-800 dark:text-white dark:bg-zinc-900 text-sm md:text-base`}>
                <Navbar />
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}
