import { Box, Flex, Stack } from '@chakra-ui/layout';

const Card = ({ user, selected, setSelected }) => {
  const handleClick = () => {
    setSelected(user.email);
  };

  return (
    <Box
      bgColor={selected ? 'purple.500' : 'white'}
      mx="8"
      my="4"
      boxShadow="md"
      borderRadius="sm"
      as="button"
      textAlign="left"
      onClick={handleClick}
    >
      <Stack py="2" spacing="2" mx="3">
        <Box textTransform="capitalize" color={selected ? 'white' : 'gray.500'}>
          {' '}
          {`${user.gender} - NL`}
        </Box>
        <Box fontWeight="700" color={selected ? 'white' : 'black'}>
          {' '}
          {`${user.gender === 'female' ? 'Ms.' : 'Mr.'} ${user.name.first} ${
            user.name.last
          } `}
        </Box>
        <Box color={selected ? 'white' : 'red.400'}>{user.email}</Box>
      </Stack>
    </Box>
  );
};

export default Card;
