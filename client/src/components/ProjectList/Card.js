// create card in chakra-ui?
import * as React from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text
} from "@chakra-ui/react";
import { DragHandleIcon, ExternalLinkIcon, EditIcon } from '@chakra-ui/icons'
import ModalButton from '../OpenModal/ModalButton'
export default function Card({ project }) {
    return (
        <Box
            w="300px"
            // h={600}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
        >
            <Flex
                w="100%"
                h="100%"
                direction="column"
                align="center"
                // bg={"red.100"}
                justify="flex-start">
                <Box
                    w={300}
                    h={250}
                    bg={"red.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                // pos={"relative"}
                >
                    <div
                        style={{
                            height: 250,
                            width: 300,
                            backgroundImage: `URL(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "middle"
                        }}
                    ></div>
                </Box>
                <Stack
                    w="100%"
                    p={6}

                // h={300}
                // bg={"red.100"}
                >
                    <Text
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        S.R DRAGONFANG
                    </Text>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {project.title}
                    </Heading>
                    <Text
                        color={"gray.500"}
                        noOfLines={4}
                        h={100}
                        // bg={"green.300"}
                        textAlign="left"
                    >
                        {project.description}
                    </Text>
                </Stack>
            </Flex>
            <Stack
                // bg={"green.100"}
                p={2}
            >
                <Flex w="100%" direction={"row"} spacing={4} align={"center"} justify="flex-end">

                    <ModalButton data={project} Icon={ExternalLinkIcon} modalPreview={true} />
                    <ModalButton Icon={EditIcon} title="Project | Update" modalEdit={true} />
                    <ModalButton Icon={DragHandleIcon} title="Project | Setting" />
                </Flex>
            </Stack>
        </Box>
    );
}


