'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  // Ensure we're using the correct theme on initial load
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until we're mounted to avoid hydration mismatches
  if (!mounted) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem
      // disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}