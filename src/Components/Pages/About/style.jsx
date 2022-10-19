import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    background-color: #427692;
    margin-left: 20%;
    width: 80%;
    height: 100vh;
`

export const Box = styled.section`
height: 80%;
display: flex;
margin: 3vw;

    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2em;
        color: white;
    }
    
    p{
        margin-bottom: 1.7rem;
        margin-top: 1.7rem;
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