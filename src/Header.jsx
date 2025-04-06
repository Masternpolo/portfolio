import Bubbles from './assets/Bubbles.png'
import Handburger from './assets/Handburger.png'


function Header() {
    return (
        <>
            <header className='bg-dark'>
                <nav className='px-5 py-2 md:px-10 lg:px-16 xl:px-20 flex '>
                    <div className="border border-gray-400 rounded-full size-12 bg-light">
                        <img src={Bubbles} alt="Logo Icon" className='mt-2 mx-auto' />
                    </div>
                    <div className="border border-gray-400 rounded-full w-80 bg-light md:w-full">
                        <ul className='text-neutral-50 hidden md:flex md:flex-row md:justify-between md:items-center py-2 px-12'>
                            <li>ABOUT
                                <link rel="stylesheet" href="#" />
                            </li>
                            <li>PORTFOLIO
                                <link rel="stylesheet" href="#" />
                            </li>
                            <li>CONTACT
                                <link rel="stylesheet" href="#" />
                            </li>
                        </ul>
                        <img src={Handburger} alt="Handburger Icon" className='mt-2 mx-auto md:hidden' />
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header