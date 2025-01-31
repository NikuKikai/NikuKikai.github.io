"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { Suspense } from 'react'

export default function LoadingIndicator() {
    return <Suspense><LoadingIndicatorInner /></Suspense>
}
export function LoadingIndicatorInner() {
    const [isLoading, setIsLoading] = React.useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    React.useLayoutEffect(() => {
        // 路由变化时触发加载状态
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 800); // 模拟加载完成
        return () => clearTimeout(timeout);
    }, [pathname, searchParams]);

    // if (!isLoading) return null;

    //className="fixed top-0 left-0 right-0 h-1 bg-blue-500 animate-pulse"

    return (
        <div style={{
            position: 'fixed', width: '100%', height: '100%', background: 'black',
            top: 0, left: 0, opacity: isLoading ? 1 : 0, transition: '0.4s', pointerEvents: 'none',
        }} />
    );
}