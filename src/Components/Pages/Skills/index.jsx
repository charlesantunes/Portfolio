import React from "react";

import Menu from '../../Menu/index'
import * as S from './style'

export default function Skills() {
    return(
        <>
            <Menu />
            <S.Container>
                <S.SecBox>

                    <S.BoxTitle>
                        <h1>Skills</h1>
                    </S.BoxTitle>


                    <S.BoxSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                        <S.CardSkill>
                            <img src="" alt="HTML"/>
                        </S.CardSkill>
                    </S.BoxSkill>
                    
                </S.SecBox>
            </S.Container>
        </>
    )
}