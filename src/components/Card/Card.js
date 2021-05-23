import { Button } from '@chakra-ui/button';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import React from 'react';

const Card = (props) => {
  console.log(props.users[0]);
  if (props.users.length > 0) {
    return props.users.map((user, index) => {
      //console.log(user.gender);
      return (
        <Box
          bgColor="white"
          //width={['90%', '30%', '30%', '22%']}
          mx="8"
          my="4"
          boxShadow="md"
          borderRadius="sm"
          key={index}
          as="button"
          textAlign="left"
        >
          <Stack py="2" spacing="2" mx="3">
            <Box textTransform="capitalize"> {`${user.gender} - NL`}</Box>
            <Box fontWeight="700">
              {' '}
              {`${user.gender === 'female' ? 'Ms.' : 'Mr'} ${user.name.first} ${
                user.name.last
              }`}
            </Box>
            <Box color="red.400">{user.email}</Box>
          </Stack>
        </Box>
      );
    });
  } else {
    return <Box>NO DATA YET!</Box>;
  }
};

export default Card;
