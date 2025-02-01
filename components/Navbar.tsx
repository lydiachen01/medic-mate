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
        <>
            <nav className="flex items-center justify-between py-4 lg:pl-10 mx-[15vw]">
                <a href="/" className="flex items-center">
                    <img src="/pink_logo.png" alt="Logo" className="h-[4rem] pl-4" />
                </a>
                <div className="flex items-center space-x-10">
                    <button className="flex items-center lg:hidden block rounded p-2">
                        <img src="/pink_logo.png" alt="Logo" className="h-7" />
                    </button>
                    <Tabs tabName="Add Medication" link="/add_meds" />
                    <Tabs tabName="Disclaimer" link="/#" />
                </div>
            </nav >
        </>
    )
}

export default Navbar