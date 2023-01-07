import { Heading, HStack, Box,Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <>
            <VStack>
            <Box rounded="md" bgColor="#FFFFFF">
                <Image rounded="md" src={imageSrc}></Image>
                
                  <Heading color="#262626">{title}</Heading>
                <Text color="#a6abb3">{description}</Text>
                <HStack color="black"><Text>See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x" /></HStack>
                </Box>
            </VStack>
        </>
    );
};

export default Card;
