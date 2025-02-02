'use client'

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface TabsProps {
    tabName: string;
    link: string;
    onClick?: (e:any) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabName, link, onClick }) => {
    return (
        <Link 
            href={link} 
            onClick={onClick}
            className="hover:underline lg:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
        >
            {tabName}
        </Link>
    );
}

const Navbar: React.FC = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const supabase = createClient();
    
    useEffect(() => {
        // Check initial auth state
        checkAuth();

        // Subscribe to auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsAuthenticated(!!session);
            if (!session) {
                router.push('/');
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router]);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
    };

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
            setIsAuthenticated(false);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href={isAuthenticated ? "/home" : "/"} className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-[4rem]" />
                </Link>
                <div className="flex items-center space-x-10">
                    {isAuthenticated ? (
                        <>
                            <button className="flex items-center lg:hidden rounded p-2">
                                <img src="/pink_logo.png" alt="Logo" className="h-7" />
                            </button>
                            <Tabs tabName="Drug Report" link="/display_data"/>
                            <Tabs tabName="Disclaimer" link="/disclaimer" />
                            <Tabs 
                                tabName="Sign Out" 
                                link="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignOut();
                                }} 
                            />
                        </>
                    ) : (
                        <>
                            <Tabs tabName="Our Team" link="/#" />
                            <Tabs tabName="Login" link="/user/login" />
                            <Tabs tabName="Sign Up" link="/user/signup" />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
