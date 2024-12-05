// pages/_app.tsx

import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'
import { UserProvider } from '@/context/userContext'

export const metadata: Metadata = {
    title: 'NextJs Starters',
    description: '',
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}

export default MyApp
