import { Link } from "react-router-dom";
import { SNavbar } from "./style";
import logo from '../../assets/logo.png';


export const Navbar = ( { hide , navigation}:any ) => {
    console.log(navigation);
    
    return (
        <SNavbar>
            <nav>
                  
                        {hide === true ? (<>
                             <li><img src={logo} alt="logo" /></li>

                        <li> 
                            <Link to={"/cadastro"}>
                            <button>
                                Cadastre-se
                            </button>
                            </Link>
                        </li>
                    </>
                   
                        ) : (
                
                            <li>
                                <Link to={navigation}>
                                <img src={logo} alt="logo" />
                                </Link>
                                </li>
               
                        )}
                        

                
            </nav>
        </SNavbar>
    )
};