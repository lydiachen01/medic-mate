'use client'

import React from "react";

interface TabsProps {
    tabName: string;
    link: string;
}

const Tabs: React.FC<TabsProps> = ({ tabName, link }) => {
    return (
        <a href={link} className="hover:underline hidden lg:block">{tabName}</a>
    );
}

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src="/pink_logo.png" alt="Logo" className="h-[4rem]" />
                </a>
                <div className="flex items-center space-x-10">
                    <button className="flex items-center lg:hidden rounded p-2">
                        <img src="/pink_logo.png" alt="Logo" className="h-7" />
                    </button>
                    <Tabs tabName="Add Medication" link="/add_meds" />
                    <Tabs tabName="Drug Report" link="/display_data"/>
                    <Tabs tabName="Disclaimer" link="/disclaimer" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar