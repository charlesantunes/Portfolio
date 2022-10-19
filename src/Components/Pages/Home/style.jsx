import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled(motion.section)`
    animate{
        opacity: 1;
    }

    initial{
        opacity: 0;
    }

    background-color: #354650;
    margin-left: 20%;
    width: 80%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content:space-evenly;

`

export const Box = styled.section`
position: relative;
height: 80%;
display: flex;
margin: 3vw;

    h1, h2, p{
        margin-bottom: 1.7rem;
        font-size: 1.3em;
    }
    h1 span{
        font-family:Clicker Script, cursive;
        color: #2c71e1;
        font-size: 1.67em;
        font-weight: bolder;
    };
    h2 span{
        color: #2c71e1;
        font-weight: bolder;
    };

    figure{
        ::before{
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border-top: solid 5px white;
            border-left: solid 5px white;
            display: block;
            background-color: #354650;
        }
        ::after{
            content: '';
            position: absolute;
            right: 0%;
            top: 190px;
            width: 40px;
            height: 40px;
            border-bottom: solid 5px white;
            border-right: solid 5px white;
            display: block;
            background-color: #354650;
        }

        img {
            position: relative;
            z-index: 1;
            width: 200px;
        }
    }

`
export const Content = styled.div`
    nav{
        margin-top: 5em;
        width: 20em;
        height: 45px;
        display: flex;
        justify-content: space-evenly;

        button{
            font-family:'Henny Penny', cursive;
            background-color: #2f4f4f;
            padding: 1vh 2vw;
            border: outset 0.5px;        
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            color: #fff;
            border-radius: 15px;
            box-shadow: 0 5px #999;
    }
    button:hover{
        background-color: #3e8e41
    }
    button:active {
        transform: translateY(4px);
}
    }

`

