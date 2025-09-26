"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="font-sans bg-slate-50 text-slate-900">
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-8">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-rose-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
                500
              </h1>
              <h2 className="text-xl font-semibold text-slate-900 text-balance">
                Something went wrong
              </h2>
              <p className="text-slate-600 text-balance leading-relaxed">
                {
                  "We're experiencing some technical difficulties. Please try refreshing the page or return to the homepage."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-slate-900 font-medium rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>

            {/* Error ID */}
            {error.digest && (
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Error ID:{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">
                    {error.digest}
                  </code>
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
