import {Box, Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
      <HStack>
        <VStack bg='white' borderRadius='lg'>
          <Image src={imageSrc}  borderRadius='lg' boxSize='auto'></Image>
          <Box p='5'>
            <Heading size='xs' color='black'>{title}</Heading>
            <Text color='black'>{description}</Text>
            <Button colorScheme='blue' mt={2} >See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Button>
          </Box>

        </VStack>

      </HStack>
  );
};

export default Card;
