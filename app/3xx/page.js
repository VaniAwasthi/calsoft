"use client";

import { ArrowRight, Clock, Home, RefreshCw } from "lucide-react";
import { useSearchParams } from "next/navigation";

const statusCodes = {
  300: {
    title: "Multiple Choices",
    description:
      "The requested resource has multiple representations. Please choose one of the available options.",
    icon: ArrowRight,
    bgColor: "bg-amber-50",
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    action: () => window.history.back(),
  },
  302: {
    title: "Found",
    description:
      "The requested resource has been temporarily moved to a different location. You should be redirected automatically.",
    icon: ArrowRight,
    bgColor: "bg-blue-50",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    action: () => window.history.back(),
  },
  304: {
    title: "Not Modified",
    description:
      "The requested resource has not been modified since your last visit. Using cached version.",
    icon: Clock,
    bgColor: "bg-green-50",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    action: () => window.location.reload(),
  },
};

export default function RedirectStatusPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "302";
  const statusCode = Number.parseInt(code);

  // Default to 302 if invalid code
  const status = statusCodes[statusCode] || statusCodes[302];
  const Icon = status.icon;

  return (
    <div
      className={`min-h-screen ${status.bgColor} flex items-center justify-center p-4`}
    >
      <div className="max-w-md w-full text-center space-y-8">
        {/* Status Icon */}
        <div className="flex justify-center">
          <div
            className={`w-24 h-24 ${status.iconBgColor} rounded-full flex items-center justify-center`}
          >
            <Icon className={`w-12 h-12 ${status.iconColor}`} />
          </div>
        </div>

        {/* Status Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            {statusCode}
          </h1>
          <h2 className="text-xl font-semibold text-slate-900 text-balance">
            {status.title}
          </h2>
          <p className="text-slate-600 text-balance leading-relaxed">
            {status.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
          <button
            onClick={status.action}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-slate-900 font-medium rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <RefreshCw className="w-4 h-4" />
            {statusCode === 304 ? "Force Refresh" : "Go Back"}
          </button>
        </div>
      </div>
    </div>
  );
}
