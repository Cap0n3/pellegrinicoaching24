'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

// Provider for the Parallax component.
export function Providers({ children }: { children: React.ReactNode }) {
    return <ParallaxProvider>{children}</ParallaxProvider>;
}