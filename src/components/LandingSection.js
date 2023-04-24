import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Miguel Tucto!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src="https://lh3.googleusercontent.com/a/AGNmyxYzE-ZFxJuRGCwkuFFbuJyyfFBhtxCL3YXfhdEQ2g=s288" size="2xl" />
      <Heading size='xs'>{greeting}</Heading>
      <Heading as='xl' >{bio1}</Heading>
      <Heading as='xl'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
