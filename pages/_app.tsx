import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
    const [protectRoutes, setProtectedRoutes] = useState<Promise<boolean>>();
    const route = useRouter();

    useEffect(() => {
        const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : undefined;
        if (!token) {
            route.push("/");
        }
    }, [protectRoutes]);
    return <Component {...pageProps} />;
}
