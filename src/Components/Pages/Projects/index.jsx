import React from "react";
import {Link} from 'react-router-dom'

import Menu from '../../Menu/index'
import HarryPotter from '../../../Assets/img-project/harry-potter.gif'
import Team from '../../../Assets/img-project/team.gif'
import ImgOnu from '../../../Assets/img-project/onu/Onu.gif'
import * as S from './style'

export default function Projects() {

    return(
        <>
            <Menu />
            <S.Container>
                <S.Box>
                    
                    <S.Card>
                        <h2>Onu</h2>
                        <img src={ImgOnu} alt={'imagem em um card do Harry Potter'} /> 
                        <button><a href="https://onu-brasil-para-belem-souza.herokuapp.com/" target={"_blanc"}>Ver</a></button>
                    </S.Card>

                    <S.Card>
                        <h2>Api Harry Potter</h2>
                        <img src={HarryPotter} alt={'imagem em um card do Harry Potter'} /> 
                        <button onClick={()=>{window.location.replace('https://charles-harry-potter.herokuapp.com/harry-potter') }}>Ver</button>
                    </S.Card>

                    <S.Card>
                        <h2>Trabalho em equipe</h2>
                        <img src={Team} alt={'imagem em um card do trabalho em equipe'} />
                        <button onClick={()=>{window.location.replace('https://charles-adriana.herokuapp.com/') }}>Ver</button>
                    </S.Card>                             
                </S.Box>

                <S.Box>
                    <S.Card>
                        <img src={HarryPotter} alt={''} />
                        <button><Link to={"/harry-potter"}>Ver</Link></button>
                    </S.Card>
                </S.Box>

                <S.Box>
                    <S.Card>
                     <h2>Trabalho em equipe</h2>
                        <img src={Team} alt={'imagem em um card do trabalho em equipe'} />
                        <button onClick={()=>{window.location.replace('https://charles-adriana.herokuapp.com/') }}>Ver</button>
                    </S.Card>
                </S.Box>
                
            </S.Container>
        </>
    )
}