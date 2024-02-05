import { Link } from "react-router-dom"
import { SNavbar } from "./style"

export const Navbar = ( { hide }:any ) => {

    return (
        <SNavbar>
            <nav>
                <li><h1>Netflix</h1></li>
                <li>    
                        {hide === true ? (
                            <Link to={"/"}>
                            <button>
                                Voltar
                            </button>
                    </Link>
                        ) : (
                            <Link to={"/cadastro"}>
                        <button>
                            Cadastre-se
                        </button>
                </Link>
                        )}
                        

                </li>
            </nav>
        </SNavbar>
    )
}