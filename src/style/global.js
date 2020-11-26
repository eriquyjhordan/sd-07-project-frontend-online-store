import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        background-color: #f5f5f5;
    }

    @keyframes is-rotating {
        to {
            transform: rotate(2turn);
        }
    }

`;