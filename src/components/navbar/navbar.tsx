import { Link } from "react-router-dom"
import { SNavbar } from "./style"

export const Navbar = (  ) => {
    return (
        <SNavbar>
            <nav>
                <li><h1>Netflix</h1></li>
                <li>
                        <Link to={"/cadastro"}>
                        <button>
                            Cadastre-se
                        </button>
                </Link>

                </li>
            </nav>
        </SNavbar>
    )
}