import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
position: relative;
`;

function LoadingPage() {
    return (
        <LoadingDiv>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
            alt='Loading'/>
        </LoadingDiv>
    );
};

export default LoadingPage;