import { Cadastro } from "../../components/cadastro/cadastro";
import { Navbar } from "../../components/navbar/navbar";
import * as S from './style'


export const Form  = () => {

    return (      
        <section id="image">   
                <S.BackContainer>

                <Navbar navigation="/"/>

                <Cadastro/>   

                </S.BackContainer>
        </section>

    )

}