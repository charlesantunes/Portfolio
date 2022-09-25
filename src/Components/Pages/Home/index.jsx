import React from "react";

import Menu from '../../Menu/index'
import * as S from './style'

export default function Home() {
    return(
        <>
            <S.Container>
            <Menu />
                <h1>home</h1>
            </S.Container>
        </>
    )
}