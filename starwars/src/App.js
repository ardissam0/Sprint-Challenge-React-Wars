import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import styled from 'styled-components';
import StarWarsPage from './components/StarWarsPage';
import LoadingPage from './components/LoadingPage';
import PageForPagination from './components/PageForPagination';

const PersonStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

const App = () => {
  const SwapiUrl = 'https://swapi.co/api/people/';
  const [person, setPerson] = useState();
  const [url, setUrl] = useState(SwapiUrl);
  const [changeUrl, setChangeUrl] = useState('');
  const [backUrl, setBackUrl] = useState('');

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setPerson(response.data.results);
      setChangeUrl(response.data.next);
      setBackUrl(response.data.previous);
    })
    .catch(err => console.log(err));
  }, [url]);
  console.log(person);

  if (!person) return <LoadingPage />;

  return (
    <PersonStyle>
    {person.map((item, index) => (
      <StarWarsPage key={index} item={item} />
    ))}
    <PageForPagination next = {changeUrl} previous = {backUrl} url = {setUrl} />
    </PersonStyle>
  );
};

export default App;
