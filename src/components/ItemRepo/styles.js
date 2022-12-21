import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
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
        color: #FAFAFA60;
        margin: 20px 0;
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
`