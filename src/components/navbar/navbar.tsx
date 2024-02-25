import { Link } from "react-router-dom";
import { SNavbar } from "./style";
import logo from '../../assets/logo.png';


export const Navbar = ( { hide }:any ) => {

    return (
        <SNavbar>
            <nav>
                <li><img src={logo} alt="logo" /></li>
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
};