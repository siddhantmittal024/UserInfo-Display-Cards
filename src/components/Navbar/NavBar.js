import React, { useState } from 'react';
import { Flex, Button, IconButton } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const [display, changeDisplay] = useState('none');
  return (
    <Flex width="100%">
      <Flex
        top="1rem"
        right="1rem"
        align="center"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Flex mx={[4, 8, 8, 16]} fontSize="xl" fontWeight="700">
          YourChallenge
        </Flex>

        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']} mx={[8, 8, 8, 16]}>
          <Button
            borderBottomWidth="3px"
            borderColor="red.400"
            borderRadius="0"
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
            fontSize="xl"
          >
            Product
          </Button>

          <Button
            as="a"
            variant="ghost"
            aria-label="About"
            my={5}
            w="100%"
            fontSize="xl"
          >
            Download
          </Button>

          <Button
            as="a"
            variant="ghost"
            aria-label="Contact"
            my={5}
            w="100%"
            fontSize="xl"
          >
            Pricing
          </Button>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mx={4}
          my={2}
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Product
          </Button>
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            Download
          </Button>
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            Pricing
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
