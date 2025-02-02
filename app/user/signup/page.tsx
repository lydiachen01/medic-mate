'use client'

import Link from 'next/link';
import { useState } from 'react';
import { signup } from '../login/actions';

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasStartedConfirming, setHasStartedConfirming] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        if (formData.get('password') !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setIsLoading(true);
        try {
            await signup(formData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-4">
            <div className="max-w-sm w-full space-y-8 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8">
                <div>
                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                        Register an Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/user/login" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-80">
                            Sign in
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action={handleSubmit}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-slate-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 border border-slate-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setHasStartedConfirming(true);
                                }}
                                className="appearance-none relative block w-full px-3 py-2 border border-slate-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                                placeholder="Confirm Password"
                            />
                        </div>
                        {hasStartedConfirming && password !== confirmPassword && (
                            <p className="text-red-500 text-sm transition-all">
                                Passwords do not match!
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading || (hasStartedConfirming && password !== confirmPassword)}
                            className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl disabled:opacity-50"
                        >
                            {isLoading ? 'Creating account...' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 