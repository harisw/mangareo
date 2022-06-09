import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-300">
            <Head>
                <title>Mangareo - Your one stop place to explore Manga</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex w-full flex-1 flex-col items-center content-start px-8 text-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}