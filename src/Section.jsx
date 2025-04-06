import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Profile from './assets/Profile.webp'
import Mobileapp from './assets/Mobileapp.png'
import Arrowup from './assets/Arrowup.png'
import Ai from './assets/Ai.png'
import Map from './assets/Map.png'




function Section() {
    return (
        <>
            <main className="bg-dark mt-1 px-5 md:px-10 lg:px-16 xl:px-20">
                <section className="w-full bg-light rounded flex flex-col gap-8 py-4 px-4 mb-2">
                    <div className="flex flex-col gap-4 md:flex-row-reverse md:justify-between md:w-full">
                        <div className="w-44 flex items-center gap-4 md:flex-row">
                            <div className="size-2 rounded-full bg-red-500 ">

                            </div>
                            <p className="text-xs text-neutral-50">AVAILABLE FOR JOB </p>
                        </div>
                        <h3 className="text-gray">FULLSTACK DEVELOPER</h3>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row-reverse justify-between">
                        <div className="rounded-full size-28  border-gray">
                            <img src={Profile} alt="" className="rounded-full size-28 p-1" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className='text-white text-2xl'>I'm Edeogu Ogomegbunam</h2>
                            <p className='text-gray'>I design user-friendly and <br /> responsive web apps
                            </p>
                            <a className='text-white flex gap-0.5 rounded' href="#">
                                <span className="p-2 rounded-tl-md rounded-bl-md bg-red-600">Hire me</span> <span className="p-2 rounded-tr-md rounded-br-md bg-red-600">+</span>
                            </a>
                        </div>
                    </div>

                </section>

                <section className="md:flex gap-4">
                    <div className="w-full bg-light rounded flex flex-col gap-8 py-4 px-4 mb-2">
                        <div className="w-44 flex items-center gap-4">
                            <div className="size-2 rounded-full bg-white">
                            </div>
                            <p className="text-xs text-gray">Recent Works</p>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Task Management App</h3> <a href="#" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Book App</h3> <a href="#" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Task Management App</h3> <a href="#" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Task Management App</h3> <a href="#" className="text-gray">view</a>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full h-28 bg-light rounded flex justify-center items-center py-4 px-4 mb-2">
                            <div className="text-center text-white">
                                <p>My Design</p>
                            </div>
                        </div>
                        <div className="w-full rounded flex gap-2 mb-2">
                            <div className="w-full flex justify-center items-center h-28 bg-light rounded border px-4 mb-2">
                                <p className="text-white">Product Design</p>
                            </div>
                            <div className="w-full flex justify-center items-center h-28 bg-light rounded border px-4 mb-2">
                                <p className="text-white">Product Design</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="w-full rounded flex flex-col gap-2 mb-2 md:flex-row md">
                            <div className="bg-light rounded md:w-full">
                                <div className="flex justify-between p-4 mb-4">
                                    <div className="text-white ">
                                        <h3>IOS Mobile app</h3>
                                        <p>Product development</p>
                                    </div>
                                    <div className="">
                                        <img src={Arrowup} alt="" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center rounded px-4">
                                    <div className="">
                                        <img src={Mobileapp} alt="" className="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:w-full">
                                <div className="w-full flex flex-col justify-center bg-light rounded border px-4 py-4 md:w-full md:-mt-10">
                                    <div className="flex justify-between px-4 py-8">
                                        <div className="text-white">
                                            <h3>IOS Mobile app</h3>
                                            <p>Product development</p>
                                        </div>
                                        <div className="">
                                            <img src={Arrowup} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={Ai} alt="" />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col justify-center bg-light rounded border px-4 py-4 md:w-full">
                                    <div className="flex justify-between px-4 py-8">
                                        <div className="text-white">
                                            <h3>IOS Mobile app</h3>
                                            <p>Product development</p>
                                        </div>
                                        <div className="">
                                            <img src={Arrowup} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={Map} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </>
    )
}

export default Section