import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background-dark dark:via-gray-900 dark:to-black transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-12">
        {/* Logo */}
        <div className="flex items-center gap-4 animate-fade-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-2xl">
            <span className="material-symbols-outlined text-5xl">local_taxi</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">Mangalam</p>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Tours And Travels</p>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <DotLottieReact
            src="https://lottie.host/8749fa4f-d661-4bf0-926f-98dc04eb9519/2gRuoJlLQ0.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Loading indicator */}
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 animate-pulse">Getting your ride ready...</p>
          <div className="flex justify-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.15s" }} />
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
