import styled from '@emotion/styled';

export const LoginPage = styled.div`
    height: 100%;
    background-color: beige;
    a {
        padding-left: 10px;
        color: black;
    }
    a:hover {
        color: brown;
        font-style: italic;
    }
    p {
        display: flex;
        color: black;
        justify-content: right;
        padding: 5px;
        margin-right: 10px;
    }
    form {
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    input {
        background-color: white;
        padding: 5px;
        color: black;
        border-radius: 4px;
        margin-left: 3px;
    }
    span {
        color: red;
        padding: 5px;
    }
    .submit {
        background-color: aliceblue;
    }
`;