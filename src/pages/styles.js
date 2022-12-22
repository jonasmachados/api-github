import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    margin: 20px 0 0 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Nav = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 450px){
        margin-left: 10%;
    }
 
`

