import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
    animate{
        opacity: 1;
    }
    initial-letter{
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