import React from "react";
import {Link} from 'react-router-dom'

import Menu from '../../Menu/index'
import HarryPotter from '../../../Assets/img-project/harry-potter.gif'
import * as S from './style'

export default function Projects() {

    return(
        <>
            <Menu />
            <S.Container>
                <S.Box>
                    
                    <S.Card>
                        <h2>Api Harry Potter</h2>
                        <img src={HarryPotter} alt={''} /> 
                        <button onClick={()=>{window.location.replace('https://charles-harry-potter.herokuapp.com/harry-potter') }}>Ver</button>
                    </S.Card>

                    <S.Card>
                    </S.Card>
                    <img src={HarryPotter} alt={''} />
                    <button><Link to={"/harry-potter"}>Ver</Link></button>
                     
                    <S.Card>
                    </S.Card> 
                
                        
                    
                </S.Box>
                
            </S.Container>
        </>
    )
}