import React from 'react';
import Image from 'next/image';

const Index = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <ul className="list-inside list-decimal text-xl text-center sm:text-left">
                    <li>This is the starters pack for nextjs projects.</li>
                </ul>

            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/the-bipu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="./globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Contact Us →
                </a>
            </footer>
        </div>
    )
}

export default Index