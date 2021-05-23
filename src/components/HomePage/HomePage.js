import { Box, Grid } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import Banner from '../Banner/Banner';

const HomePage = () => {
  const [users, setUsersList] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get(
        'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20'
      )
      .then((res) => {
        //console.log(res.data.results);
        const allUsers = res.data.results;
        setUsersList(allUsers);
      })
      .catch((err) => console.error(`Error:${err}`));
  };

  return (
    <>
      <Banner user={users.find((user) => user.email === selectedEmail)} />
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)'
        ]}
      >
        {users.map((user) => (
          <Card
            key={user.email}
            user={user}
            selected={user.email === selectedEmail}
            setSelected={setSelectedEmail}
          />
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
