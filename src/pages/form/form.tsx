import { Cadastro } from "../../components/cadastro/cadastro";
import { Navbar } from "../../components/navbar/navbar";
import * as S from './style'


export const Form  = () => {

    return (      
        <S.SectionContainer>   
                <S.BackContainer>

                <Navbar navigation="/"/>

                <Cadastro/>   

                </S.BackContainer>
        </S.SectionContainer>

    )

}