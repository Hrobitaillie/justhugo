import ImageWebP from '../../components/ImageWebP'
import Birds from './Canvas/Birds'
import { Outlet } from "react-router-dom";
import Header from './Header';
import { useState } from 'react';

export default function Layout() {

    const [isMenuOpen, toggleMenuOpen] = useState(false)

    return(
        <>
            <Header toggleMenu={toggleMenuOpen} isMenu={isMenuOpen}/>
            <section id='page' 
                className={
                    'h-full w-full relative  transition-all' +
                    (isMenuOpen ? " ml-96" : " ml-0")
                }>
                <section className='absolute left-0 top-0 w-screen h-screen -z-10'>
                    <ImageWebP
                    src={window.location.origin + "/assets/imgs/backrounds/background1.webp"}
                    fallback={window.location.origin + "/assets/imgs/backrounds/background1.jpg"}
                    classnames=" h-screen w-screen object-screen block "
                    alt="A photo showing the expiration date on a box of Lucky Charms" 
                    className="object-cover h-full w-full"
                    />
                </section>
                <Birds />
                <div className=" w-full h-full min-h-screen z-30">
                    <Outlet />
                </div>
            </section>
        </>
    )
}