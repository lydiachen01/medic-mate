'use client'

import Link from 'next/link';
import { Home } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-4">
      <div className="text-center p-8 max-w-lg bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mb-4">
            404
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for seems to have taken a coffee break. Let's get you back on track.
          </p>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <div className="mt-12 space-y-3">
          <div className="text-sm text-gray-500 font-medium">
            Error Code: 404
          </div>
          <div className="text-sm text-gray-400">
            If this problem persists, please contact support
          </div>
        </div>
      </div>
    </div>
  );
}