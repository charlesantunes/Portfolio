import styled from "styled-components";

export const Container = styled.section`
    border: solid;
    position: fixed;
    background-color: #2f434f;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
    export const Img = styled.figure`
    background-color: #c1c1c1;
        width: 145px;
        height: 200px;
        margin-top: 1.5vh;
        margin-bottom: 2.1vh;
        border: outset 1px Darkgray;
        border-width:5px;
        display: flex;
        justify-content: center;
        align-items: center;
    img{
        width: 100%;
        height: 190px;
    }
    `

    export const Box = styled.section`
    nav{
        //    border: solid #fff;z
        width: 60%;
        height: 50%;
    }
    div{
        background-color: #fff;
        opacity: 0.3;
        width: 100%;
        height: 0.9px;
        margin-bottom: 3vh;
    }
    
    ul{
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    li{
        //    border: solid;
        width: 90%;
        font-size: 1.5rem;
        display: flex;
        &:hover{
            text-decoration: none;
            transition: all 1s;
            transform: scale(1.2);
            text-decoration: dotted;
        }
        img{
            margin-right: 2vw;
            width: 25px;
            height: 28px;
        }
    }
    
    a{
        text-decoration: none;
        color: white;
        
        &:hover{
            text-shadow: 0 0 10px red;
        }
        &:focus{
            color: black;
            font-weight: bolder;
        }
    }
    `
    /* button{
        background-color: #2f4f4f;
        padding: 1.3vh 2vw;
        border: outset 0.5px;
        font-size: 1.1rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border-radius: 10px;
    }
    button:hover{
        background-color: #3e8e41
    }
    button:active {
        transform: translateY(4px);
    }
    input{
        font-family:'Henny Penny', cursive;
        height: 6vh;
        border-radius: 10px;
        margin-right: 0.5rem;
        outline: 0;
        font-size: 1rem;
        font-weight: bolder;
    } */
    