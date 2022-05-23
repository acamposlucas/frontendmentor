import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: hsl(25, 97%, 53%);
        --white: hsl(0, 0%, 100%);
        --lightGrey: hsl(217, 12%, 63%);
        --mediumGrey: hsl(216, 12%, 54%);
        --darkBlue: hsl(213, 19%, 18%);
        --veryDarkBlue: hsl(216, 12%, 8%);

        --fw-regular: 400;
        --fw-bold: 700;
    }
        
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--veryDarkBlue);
            display: grid;
            place-items: center;
            min-height: 100vh;
            padding: 0 1.5rem;
        }

        body, input, textarea, button {
            font-family: 'Overpass', sans-serif;
            font-weight: 400;
            font-size: 16px;
        }

        html {
            @media (max-width: 1080px) {
                font-size: 93.75%;
            }

            @media (max-width: 720px) {
                font-size: 87.5%;
            }
        }
    
`;
