import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Profile from './assets/my_pic_resized.jpg'
import Mobileapp1 from './assets/English_IT_1.jpg'
import Hub from './assets/Hub.png'
import Ai from './assets/Alx.png'
import Map from './assets/Career_Essentials.jpg'




function Section() {

    // function copyEmail() {
    //     const email = document.getElementById("email").textContent;
    //     navigator.clipboard.writeText(email)
    //         .then(() => alert("Email copied!"))
    //         .catch(err => alert("Failed to copy email: ", err));
    // }
    return (
        <>
            <main className="bg-dark mt-1 px-5 md:px-10 transition-all duration-1000 ease-linear lg:px-16 xl:px-20">
                <section className="w-full bg-light rounded flex flex-col gap-8 py-4 px-4 mb-2">
                    <div className="flex flex-col gap-4 md:flex-row-reverse md:justify-between md:w-full">
                        <div className=" flex items-center gap-4 md:flex-row">
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
                            <a className='text-white flex gap-0.5 rounded' href="https://drive.google.com/uc?export=download&id=1GdAQoi6See6BflcUFywQ8Smiudz5ljjl">
                                <span id="email" style={{ display: 'none' }}>masternpolo@gmail.com</span>
                                <span className="p-2 rounded-tl-md rounded-bl-md bg-red-600">Hire me</span> <span className="p-2 rounded-tr-md rounded-br-md bg-red-600">+</span>
                            </a>
                        </div>
                    </div>

                </section>

                <section className="md:flex gap-2">
                    <div className="w-full bg-light rounded flex flex-col gap-8 py-4 px-4 mb-2">
                        <div className="w-44 flex items-center gap-4">
                            <div className="size-2 rounded-full bg-white">
                            </div>
                            <p className="text-xs text-gray">Recent Works</p>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Hotel Reservation App Backend</h3> <a href="https://github.com/Masternpolo/hotel_reservation_app" target="_blank" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Mock Exam App Backend</h3> <a href="https://github.com/Masternpolo/mock-exam-app" target="_blank" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Agbalanze Onitsha USA Static Website</h3> <a href="https://agbalanze-onicha-usa.vercel.app/" target="_blank" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Book App. Server side rendering</h3> <a href="https://github.com/Masternpolo/bookapp" target="_blank" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Task Management App Frontend</h3> <a href="https://task-manager-steel-pi.vercel.app/" target="_blank" className="text-gray">view</a>
                        </div>
                        <div className="flex justify-between text-white">
                            <h3>Task Management App Backend</h3> <a href="https://github.com/Masternpolo/task-management--server" target="_blank" className="text-gray">view</a>
                        </div>
                        
                    </div>

                    <div className="w-full">
                        <div className="w-full h-28 bg-light rounded flex justify-center items-center py-4 px-4 mb-2">
                            <div className="text-center text-white">
                                <p>React Projects</p>
                            </div>
                        </div>
                        <div className="w-full rounded flex gap-2 mb-2">
                            <div className="w-full flex justify-center items-center h-28 bg-light rounded border px-4 mb-2">
                                <a className="text-gray" href="https://logistics-site-ogons.vercel.app/" target="_blank" >view</a>
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
                            <div className="bg-light rounded md:w-full md:pr-6 border-all">
                                {/* <div className="flex justify-between p-4 mb-4">
                                    <div className="text-white ">
                                        <h3>My Web Development Certifications</h3>
                                        <p>Product development</p>
                                    </div>
                                    <div className="">
                                        <img src={Arrowup} alt="" />
                                    </div>
                                </div> */}
                                <div className="mb-4 w-full flex flex-col justify-center items-center rounded px-4">
                                    <div className="">
                                        <img src={Hub} alt="" className="my-4" style={{ height: "17rem" }} />
                                    </div>
                                    <div className="">
                                        <img src={Mobileapp1} alt="" className="" style={{ height: "17rem" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:w-full">
                                <div className="w-full flex flex-col justify-center bg-light rounded border px-4 py-4 md:w-full md:-mt-38 md:ml-0.5">

                                    <div className="flex justify-center">
                                        <img src={Ai} alt="" />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col justify-center bg-light rounded border px-4 py-4 md:w-full">
                                    {/* <div className="flex justify-between px-4 py-8">
                                        <div className="text-white">
                                            <h3>IOS Mobile app</h3>
                                            <p>Product development</p>
                                        </div>
                                        <div className="">
                                            <img src={Arrowup} alt="" />
                                        </div>
                                    </div> */}
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