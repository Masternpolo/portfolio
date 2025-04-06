import React from 'react'

function Footer() {
    return (
        <>
            <footer className='px-5 pb-4 md:px-10 lg:px-16 xl:px-20 bg-dark'>
                <section className='px-4 py-8 bg-light flex flex-col gap-4 rounded text-white md:flex-row justify-between'>
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex justify-center items-center gap-4">
                            <div className="size-2 rounded-full bg-orange ">

                            </div>
                            <p className="text-xs text-white">AVAILABLE FOR JOB </p>
                        </div>
                    </div>
                    <div className="flex justify-between md:gap-8">
                        <a href="#" className='text-orange'>Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Linkdln</a>
                    </div>
                    <div className="flex justify-center">
                        <p>Portfolio 2025</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer