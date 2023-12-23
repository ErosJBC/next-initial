'use client';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    path: string;
    text: string;
}

const ActiveLink: FunctionComponent<ActiveLinkProps> = ({ path, text }: ActiveLinkProps) => {
    const pathname = usePathname();
    return (
        <Link className={`${style.link} ${ (pathname === path) && style['active-link']}`} href={path}>{text}</Link>
    )
}

export default ActiveLink