import React from "react";
import { Link } from 'react-router-dom'
import ImgHome from '../../Assets/home.gif'
import ImgAbout from '../../Assets/img-project/harry-potter/about2.gif'
import ImgSkills from '../../Assets/skills2.gif'
import ImgProjects from '../../Assets/projects2.gif'
import ImgContact from '../../Assets/contact2.gif'
import Charles from '../../Assets/charles.png'

import * as S from './style'

export default function Menu() {
    return(
        <S.Container>
            <S.Img>
                <img src={Charles} alt="imagem do perfil do Charles"/>
            </S.Img>
            <S.Box>
                <ul>
                    <li>
                        <img src={ImgHome}  alt="imagem"/>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <div/>

                    <li>
                        <img src={ImgAbout}  alt="imagem"/>
                        <Link to={"/about"}>Sobre</Link>
                    </li>
                    <div/>

                    <li>
                        <img src={ImgSkills}  alt="imagem"/>
                        <Link to={"/skills"}>Skills</Link>
                    </li>
                    <div/>

                    <li>
                        <img src={ImgProjects}  alt="imagem"/>
                        <Link to={"/projects"}>Projetos</Link>
                    </li>
                    <div/>

                    <li>
                        <img src={ImgContact}  alt="imagem"/>
                        <Link to={"/contact"}>Contato</Link>
                    </li>
                    <div/>
                </ul>
            </S.Box>
        </S.Container>
    )
}