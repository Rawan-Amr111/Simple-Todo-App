"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900/50 px-4 py-12 sm:px-6 lg:px-8 overflow-hidden relative"
      role="alert"
      aria-live="assertive"
    >
      <div className="mx-auto max-w-md text-center relative z-10">
        <div className="mx-auto flex justify-center mb-6">
          <div className="relative">
            <AlertCircle
              className="h-16 w-16 text-red-500 opacity-80"
              aria-hidden="true"
            />
            <div className="absolute inset-0 blur-md">
              <AlertCircle
                className="h-16 w-16 text-red-500 opacity-50"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-700 animate-pulse opacity-100">
          404
        </h1>

        <p className="mt-4 text-xl text-muted-foreground opacity-100">
          Oops, it looks like the page you&apos;re looking for doesn&apos;t
          exist.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-100">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Try Again
          </button>

          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 animate-bounce" aria-hidden="true" />
            Back to Home
          </Link>
        </div>

        <p
          className="mt-12 text-sm text-muted-foreground/70 opacity-100 animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          If this problem persists, please contact support.
        </p>

        {process.env.NODE_ENV !== "production" && (
          <details className="mt-6 text-sm text-muted-foreground">
            <summary className="cursor-pointer">Error Details</summary>
            <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
