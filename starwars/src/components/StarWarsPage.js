import React from 'react';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const StarDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-wdith: 315px;
    min-width: 315px;
    padding: 15px 15px 0 0;
`;

const StarWarsPage = (props) => {
    return (
        <StarDiv>
            <Card>
                <CardHeader>Name: {props.name}</CardHeader>
                <CardBody>
                    <CardTitle>Birthday: {props.birth_year}</CardTitle>
                    <CardTitle>Gender: {props.gender}</CardTitle>
                    <CardTitle>Height: {props.height}</CardTitle>
                    <CardTitle>Mass: {props.mass}</CardTitle>
                    <CardTitle>Hair Color: {props.hair_color}</CardTitle>
                    <CardTitle>Skin Color: {props.skin_color}</CardTitle>
                    <CardTitle>Eye Color: {props.eye_color}</CardTitle>
                </CardBody>
            </Card>
        </StarDiv>
    );

};

export default StarWarsPage;