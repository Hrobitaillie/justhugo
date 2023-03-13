import { useRef, useState } from "react"

export default function Burger({ toggleMenu, isMenu }){
    const burger = useRef(null)

    const triggerNav = () => {
        toggleMenu(!isMenu)
    }

    const burgerSize = 24 // devide by 4 to get tailwind size
    const diagonal = Math.hypot(burgerSize, burgerSize) - 5

    return(
        <>
            <button className="button-menu w-6 h-6 flex flex-col justify-between overflow-hidden absolute top-1/2 left-2 -translate-y-1/2" onClick={triggerNav}>
                <div 
                    className= {"h-1 w-full bg-grayPrimary rounded-sm origin-left transition-all ease-in-out duration-300"
                        + (isMenu ? ` rotate-45` : "")} 
                    style={(isMenu ? 
                        { width: diagonal + 'px'}: 
                        { width: '100%'}
                    )}
                >
                </div>

                <div className={
                    "h-1 w-full bg-grayPrimary rounded-sm transition-all ease-in-out duration-300 ml-0"
                    + (isMenu ? " ml-10 " : "")
                }></div>

                <div 
                    className= {"h-1 w-full bg-grayPrimary rounded-sm origin-left transition-all ease-in-out duration-300"
                        + (isMenu ? ` -rotate-45` : "")} 
                    style={(isMenu ? 
                        { width: diagonal + 'px'}: 
                        { width: '100%'}
                    )}
                >
                </div>
            </button>
        </>


    )
}