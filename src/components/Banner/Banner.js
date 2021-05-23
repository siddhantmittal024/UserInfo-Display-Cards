import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Banner = ({ user }) => {
  console.log(user);

  if (user) {
    return (
      <Box
        bg="white"
        m="auto"
        width={['99%', '98%', '98%', '98%', '70%', '60%']}
        p="9"
        borderRadius="xl"
        boxShadow="lg"
        my="12"

        //alignText="center"
      >
        <Flex flexDirection={['column', 'row']}>
          <Image
            src={`${user.picture.large}`}
            alt={`${user.name.first}`}
            borderRadius="full"
            boxSize={['100px', '130px']}
            m={['auto', 0]}
            marginBottom={[4]}
          />
          <Flex mx="12" flexDirection="column">
            <Box
              fontSize={['md', 'xl', '2xl', '2xl', '4xl']}
              fontWeight="700"
              color="red.400"
              borderBottomWidth="2px"
              borderColor="red.400"
              borderRadius="0"
              textAlign={['center', 'left']}
            >
              {`${user.gender === 'female' ? 'Ms.' : 'Mr.'} ${
                user.name.first
              } ${user.name.last}`}
            </Box>

            <Flex
              marginTop="3"
              alignItems="center"
              flexDirection={['column', 'row']}
            >
              <Text
                fontSize={['sm', 'sm', 'sm', 'lg']}
                color="purple.400"
                fontWeight="600"
              >{`${user.location.street.number}, `}</Text>
              <Text
                fontSize={['sm', 'sm', 'sm', 'lg']}
              >{` ${user.location.street.name},`}</Text>
              <Text
                fontSize={['sm', 'sm', 'sm', 'lg']}
              >{` ${user.location.city}, `}</Text>
              <Text
                fontSize={['sm', 'sm', 'sm', 'lg']}
              >{` ${user.location.state}, `}</Text>
              <Text
                fontSize={['sm', 'sm', 'sm', 'lg']}
                fontWeight="600"
              >{`${user.location.country}, `}</Text>
              {` ${user.location.postcode}`}
            </Flex>
            <Flex fontSize={['xs', 'lg']}>
              <Text textAlign={['center', 'left']} m={['auto', 0]}>
                {' '}
                {`${user.location.timezone.offset} - ${user.location.timezone.description}`}
              </Text>
            </Flex>
            <Text
              textAlign={['center', 'left']}
              textTransform="capitalize"
              color="gray.500"
            >
              {user.gender}
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  }

  return null;
};

export default Banner;
