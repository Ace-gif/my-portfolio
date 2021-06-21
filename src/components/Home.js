import React from 'react'
import image from '../images/lighthouse.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="Lighthouse framed on the right third of the screen with the left third being ocean water" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm MK</h1>
                {/* <h4 className=" rounded h-24 bg-gray-400 px-4 py-4">And this is my portfolio!</h4> */}
            </section>
        </main>
    )
}
