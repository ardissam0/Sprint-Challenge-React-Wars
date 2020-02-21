import React from 'react';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const StarDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-wdith: 300px;
    min-width: 300px;
    padding: 3%;
    margin-bottom: 1.5%;
    margin-top: 3%;
    font-weight: bold;
    font-size: 1.25rem;
    background-color: rgba(138, 73, 41, 0.6);
    border: solid black 5px;
`;

const StarWarsPage = props => {
    console.log(props);
    return (
        <StarDiv>
            <Card>
                <CardHeader>Name: {props.item.name}</CardHeader>
                <CardBody>
                    <CardTitle>Birthday: {props.item.birth_year}</CardTitle>
                    <CardTitle>Gender: {props.item.gender}</CardTitle>
                    <CardTitle>Height: {props.item.height}</CardTitle>
                    <CardTitle>Mass: {props.item.mass}</CardTitle>
                    <CardTitle>Hair Color: {props.item.hair_color}</CardTitle>
                    <CardTitle>Skin Color: {props.item.skin_color}</CardTitle>
                    <CardTitle>Eye Color: {props.item.eye_color}</CardTitle>
                </CardBody>
            </Card>
        </StarDiv>
    );

};

export default StarWarsPage;