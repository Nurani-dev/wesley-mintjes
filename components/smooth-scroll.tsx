"use client"
// @ts-nocheck

import { ReactLenis } from '@studio-freight/react-lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
    )
}
