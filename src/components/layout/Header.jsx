
import { useQuery } from "@tanstack/react-query";
import { getSocialMenu } from "../../services/useFetch";
import Burger from "./burger";

export default function Header({ toggleMenu, isMenu }){


    const { isLoading , error, data } = useQuery(['Social Menu'], () => getSocialMenu())


    return(
        <header className="h-full bg-dark absolute left-0 top-0 z-50">
            <Burger toggleMenu={toggleMenu} isMenu={isMenu}/>

            <div className={"transition-all overflow-hidden" + (isMenu ? " w-96" : " w-0")}>
                <nav>
                    <ul>
                        <li>Poulet</li>
                        <li>Poulet</li>
                        <li>Poulet</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}