import { Cadastro } from "../../components/cadastro/cadastro";
import { Navbar } from "../../components/navbar/navbar";
import * as S from './style'


export const Form  = () => {
    const hide:boolean = true

    return (      
        <section id="image">   
                <S.BackContainer>

                <Navbar hide={hide} />

                <Cadastro/>   

                </S.BackContainer>
        </section>

    )

}