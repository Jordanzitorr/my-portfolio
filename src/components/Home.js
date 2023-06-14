import React from 'react';
import sample from "./bg-universe.mp4";

export default function Home() {
    return (
        <main>
            <video className='videoTag absolute object-cover w-full h-full' autoPlay loop muted>
                <source src={sample} type="video/mp4" />
            </video>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 
                className='text-6xl text-yellow-400 font-bold cursive leading-none lg:leading-snug home-name'>Jordanzitor is here</h1>
            </section>
        </main>
    )
}