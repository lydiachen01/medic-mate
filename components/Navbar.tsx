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
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    const translate = (text: string) => {
        const translations: { [key: string]: { [key: string]: string } } = {
            en: {
                language: "Language",
                drugReport: "Drug Report",
                disclaimer: "Disclaimer",
                signOut: "Sign Out",
                ourTeam: "Our Team",
                login: "Login",
                signUp: "Sign Up"
            },
            es: {
                language: "Idioma",
                drugReport: "Informe de Drogas",
                disclaimer: "Descargo de responsabilidad",
                signOut: "Cerrar sesión",
                ourTeam: "Nuestro equipo",
                login: "Iniciar sesión",
                signUp: "Regístrate"
            }
        };
        return translations[language][text];
    };

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
                    <img src="/pink_logo.png" alt="Logo" className="h-[4rem]" />
                </Link>

                <div className="flex items-center space-x-10">
                    <button onClick={toggleLanguage} className="hover:underline lg:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                        {language === 'en' ? 'ES' : 'EN'}
                    </button>
                    {isAuthenticated ? (
                        <>
                            <button className="flex items-center lg:hidden rounded p-2">
                                <img src="/pink_logo.png" alt="Logo" className="h-7" />
                            </button>
                            <Tabs tabName={translate("drugReport")} link="/display_data"/>
                            <Tabs tabName={translate("disclaimer")} link="/disclaimer" />
                            <Tabs 
                                tabName={translate("signOut")} 
                                link="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignOut();
                                }} 
                            />
                        </>
                    ) : (
                        <>
                            <Tabs tabName={translate("ourTeam")} link="/#" />
                            <Tabs tabName={translate("login")} link="/user/login" />
                            <Tabs tabName={translate("signUp")} link="/user/signup" />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
