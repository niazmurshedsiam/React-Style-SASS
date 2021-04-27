import React from 'react';
import styled from 'styled-components';

const Header2 = () => {
    const Title =styled.h1 `
        font-size: 50px;
        border : 1px solid green;
        margin:5px;
        padding:5px
        text-align: center;
        color: palevioletred;
    `;
    const Container = styled.div `
        border : 1px solid green;
        margin:5px;
        padding:5px;
        text-align:center;
        color: blue;
    `;
    return (
        <div>
            <Title>This is Header 3</Title>
            <Container>
                <h3>Product Name </h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name </h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name </h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name </h3>
                <p>Product Description</p>
            </Container>
        </div>
        
        
    );
};

export default Header2;