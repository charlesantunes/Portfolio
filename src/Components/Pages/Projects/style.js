import styled from "styled-components";

export const Container = styled.section`
    background-color: #0194e4;
    margin-left: 20%;
    width: 80%;
    height: auto;

`
export const Box = styled.div`
    border: solid red;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const Card = styled.div`
        background-color: #2f4f4f;
        opacity: 0.8;
        width: 296px;
        height: 285px;
        margin-top: 1.5vh;
        margin-bottom: 2.1vh;
        border: outset 1px Darkgray;
        border-width:5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    &:hover{
        transition: all 1s;
        transform: scale(1.1);
        z-index: 99;
        opacity: 1;
    }

    h2{
        font-family:'Henny Penny', cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bolder;
        height: 6vh;
        color: white;
    }
    img{
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    button{
        font-family:'Henny Penny', cursive;
        background-color: #2f4f4f;
        padding: 1vh 2vw;
        margin: 0 30%;
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
`
