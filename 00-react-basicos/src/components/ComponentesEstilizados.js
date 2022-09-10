import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function ComponentesEstilizados() {
    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
    0%{
        opacity:0;
    }
    100% {
        opacity:1;
    }
    `;

    const MyH3 = styled.h3`
padding: 2rem;
text-align: center;
color: ${({ color }) => color};
color: ${({ color }) => color || "#000"};
background-color: ${mainColor};

${({ isButton }) => isButton && css`
margin: auto;
max-width: 50%;
border-radius: 0.25rem;
cursor:pointer;
`}

&:hover{
    background-color: ${mainAlphaColor80};
    transition: ${setTransitionTime("2s")};
    animation: ${fadeIn} 5s ease-out;
}
`;

    const light = {
        color: "#222",
        bgColor: "#DDD"
    }

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    }

    const Box = styled.div`
padding: 1rem;
margin: 1rem;
color: ${({ theme }) => theme.color};
background-color: ${({ theme }) => theme.bgColor};
`;

    const BoxRounded = styled(Box)`
border-radius 1rem;
`;

    const GlobalStyle = createGlobalStyle`
h2{
    padding:2rem;
    background-color:#fff;
    color:#61dafb;
    text-transform:uppercase;
}
`;


    return (
        <>
        <GlobalStyle />
            <h2>Styled-Components</h2>
            <MyH3>Soy un Componente Estilizado con Styled-Component</MyH3>
            <MyH3 color='#61dafb'>Hola Soy un Componente Estilizad con Styled-Component</MyH3>
            <MyH3 isButton>Soy un H3 Estilizado como botón</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja Light</Box>
                <BoxRounded>Soy una caja Light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja Dark</Box>
                <BoxRounded>Soy una caja Dark heredada del estilo Box</BoxRounded>
            </ThemeProvider>
        </>);
}