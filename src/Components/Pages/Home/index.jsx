import React from "react";

import * as S from './style'
import Menu from '../../Menu/index'
import Charles from '../../../Assets/charles.png'

export default function Home() {
    return(
        <>
            <Menu />
            <S.Container>
                <S.Box>
                    <S.Content>

                        <h1>Bem vindo, meu nome é <span>Charles Antunes</span></h1>
                        <h2>Sou <span>DESENVOLVEDOR WEB</span> </h2>
                        <p>Desenvolvo web sites single-page, utilizando a biblioteca REACT</p>
                        <p>Meu foco principal é construir sites responsivos de qualidade com as melhores técnicas e padrões de desenvolvimento, tornando fácil a manutenção dos códigos. </p>

                        <nav>
                            <button>Contato</button>
                            <button>Baixar CV</button>
                        </nav>
                    </S.Content>
                    <figure>
                        <img src= {Charles} alt="imagem charles de perfil" />
                    </figure>
                </S.Box>
            </S.Container>
        </>
    )
}