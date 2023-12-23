import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'About',
    keywords: ['About page', 'Eros', 'información', '...']
};

export default function About() {
    return (
        <span className="text-7xl">About</span>
    )
}