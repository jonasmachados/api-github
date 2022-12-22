import styled from "styled-components";

export const ItemContainer = styled.div`
     width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    div:nth-child(3) {
        grid-column: 1 / 3;
        width: 100%;
    }
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    hr {
        color: #FFF;
        margin: 30px 0;
    }
    a{
        background-color: #FFF;
        color: #FF0000;
        border: 1px solid #FAFAFA;
        border-radius: 20px;
        margin-top:20px;
        padding: 5px 10px;
        text-decoration: none;
        font-size:14px;
    }
    a:hover{
        opacity: 0.8;
    };
    button{
        background-color: #FFF;
        color: #FF0000;
        border: 1px solid #FAFAFA;
        border-radius: 20px;
        margin-top:20px;
        padding: 5px 10px;
        font-size:14px;
    };
    button:hover{
        opacity: 0.8;
    };
    img{
        max-width: 50%;
        border: 5px solid #fff;
        border-radius: 50%;
    }

`