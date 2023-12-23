
import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import ActiveLink from '../active-link/ActiveLink';

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

const Navbar: FunctionComponent = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link href={'/'} className='flex items-center gap-x-2'>
                <HomeIcon />
                <span>Home</span>
            </Link>
            <div className='flex flex-1'></div>
            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} { ...navItem } />
                ))
            }
        </nav>
    )
}

export default Navbar;
