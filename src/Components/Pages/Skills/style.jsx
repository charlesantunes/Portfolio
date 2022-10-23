import styled from "styled-components";

export const Container = styled.section`
    background-color: #04151e;
    margin-left: 20%;
    width: 80%;
    height: 100vh;
    
    `
export const SecBox = styled.section`
    border: solid 1px white;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 4em;

    `

export const BoxTitle = styled.section`
    
    h1{
        color: #2c71e1;
        font-weight: bolder;
        text-transform: uppercase;
        font-size: 2rem;
        margin-bottom: 1em;
        padding: 40px;
        position: relative;

        ::before{
            content: '';
            display: block;
            border-bottom: solid 2px white;
            width: 115px;
            height: 2px;
            margin: 0 auto;
            transition: all 1s;
        }
        ::after{
            content: '';
            display: block;
            border-bottom: solid 2px white;
            width: 115px;
            height: 2px;
            margin: 0 auto;
            transition: all 1s;
        }
    };

    ::after, ::before, h1 {
        animation-duration: 3s;
        animation-name: slidein;
    }
        @keyframes slidein {
            0% {
                margin-left: 100%;
                width: 300%
            }
            80% {
                margin-left: 0%;
                width: 100%;
            }
            90% {
                width: 50%;
                color: #b5b5b5;
            }
            100% {
                color: #0087fc;
            }
        }

`

export const BoxSkill = styled.section`
    border: solid 1px green;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`

export const CardSkill = styled.div`
    width: 150px;
    height: 150px;
    margin: 1em 0;
    background-color: #222222;
    border: 1px solid #393939;
    border-radius: 10px;
    padding: 3em 15px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`