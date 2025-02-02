import React from 'react';
import Link from 'next/link';

const Welcome: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to MedicMate
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your personal medication management assistant. Track, monitor, and understand your medications with ease.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/user/login" 
                            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link 
                            href="/user/signup" 
                            className="px-8 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <h3 className="text-lg font-semibold mb-2">Track Medications</h3>
                            <p className="text-gray-600">Easily manage and monitor your daily medication schedule</p>
                        </div>
                        <div className="text-center p-6">
                            <h3 className="text-lg font-semibold mb-2">Check Interactions</h3>
                            <p className="text-gray-600">Identify potential drug interactions and side effects</p>
                        </div>
                        <div className="text-center p-6">
                            <h3 className="text-lg font-semibold mb-2">Smart Reminders</h3>
                            <p className="text-gray-600">Never miss a dose with intelligent medication reminders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;