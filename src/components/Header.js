import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    key:1
  },
  {
    icon: faGithub,
    url: "https://github.com",
    key:2
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    key:3
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    key:4
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    key:5
  },
];

const Header = () => {
  const[scroll,setScroll]=useState(0);
  const[scrollDir,setScrollDir]=useState("");
  const hideRef=useRef("translateY(0)");

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    
    const element = document.getElementById(id);
    if (element) {
      // console.log(element);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
const handleScroll=()=>{
  setScroll(window.scrollY)
  setScrollDir(window.scrollY-scroll>0?"down":"up")
  if(scrollDir=='up')
  hideRef.current="translateY(0)"
  else
  hideRef.current="translateY(-200px)"
  // console.log(hideRef.current);
  // console.log(hideRef.current);
}
useEffect(()=>{
  const scrollOn=()=> window.addEventListener('scroll',handleScroll)
  scrollOn();
  return ()=>window.removeEventListener('scroll',handleScroll);
},[scroll]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={hideRef.current}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>{socials.map((social)=><a href={social.url} target="_blank" key={social.key}><FontAwesomeIcon icon={social.icon} size="2x"/></a>)}</HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a id="projects" href="/#project-s" onClick={handleClick("projects")}>Projects</a>
              <a id="contactme" href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
