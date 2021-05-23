import { Box, Grid } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import axios from 'axios';

const HomePage = () => {
  const [users, getUsers] = useState('');

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
        getUsers(allUsers);
      })
      .catch((err) => console.error(`Error:${err}`));
  };
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)'
      ]}
    >
      <Card users={users} />
    </Grid>
  );
};

export default HomePage;
