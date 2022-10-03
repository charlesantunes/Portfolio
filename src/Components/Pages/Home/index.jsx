import React from "react";

import Menu from '../../Menu/index'
import * as S from './style'

export default function Home() {
    return(
        <>
            <Menu />
            <S.Container>
                <h1>Bem vindo, meu nome é Charles Antunes</h1>
                <h2>Sou desenvolvedor web </h2>
                <p>Desenvolvo web sites single-page com a biblioteca REACT</p>
                <p>Meu foco principal é construir sites responsivos de qualidade com as melhores técnicas, padrões de desenvolvimento, tornando fácil a manutenção dos códigos. </p>
            </S.Container>
        </>
    )
}