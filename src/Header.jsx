import { useState } from 'react'
import Bubbles from './assets/Bubbles.png'
import Handburger from './assets/Handburger.png'


function Header() {

const [openNav, setOpenNav] = useState(false)

const toggleNav = ()=> {setOpenNav(!openNav)}

    return (
        <>
            <header className='bg-dark'>
                <nav className='px-5 py-2 md:px-10 lg:px-16 xl:px-20 flex '>
                    <div className="border border-gray-400 rounded-full size-12 bg-light">
                        <img src={Bubbles} alt="Logo Icon" className='mt-2 mx-auto' />
                    </div>
                    <div className={`${openNav ? '':'border border-gray-400 rounded-4xl'} w-80 bg-light md:w-full`}>
                        <ul className={`${openNav ? 'flex':'hidden'} text-white flex-col h-44 mt-12 justify-between text-right px-4 pb-8 md:flex md:flex-row md:justify-between md:items-center md:py-2 md:px-12 md:h-0 md:mt-4`}>
                            <li className='text-orange'>ABOUT
                                <link rel="stylesheet" href="#" />
                            </li>
                            <li>PORTFOLIO
                                <link rel="stylesheet" href="#" />
                            </li>
                            <li>CONTACT
                                <link rel="stylesheet" href="#" />
                            </li>
                        </ul>
                        <img src={Handburger} alt="Handburger Icon" onClick={toggleNav} className={`mt-2 mx-auto absolute top-3 right-8 z-50 md:hidden`} />
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header