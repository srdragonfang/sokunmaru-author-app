import React from 'react'
import { Box, Button, ModalBody, ModalFooter, Text, Heading } from '@chakra-ui/react'

const ModalPreview = ({ data, title, onClose }) => {
    return (
        <>
            <Box
                w={"100%̀"}
                h={250}
                bg={"red.100"}
                // pos={"relative"}
                style={{
                    backgroundImage: `URL(${data.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "middle"
                }}
            >
            </Box>
            <Heading
                mt={3}
                textAlign="center"
            >{data.title}</Heading>
            <ModalBody>
                <Text>{data.description}</Text>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant='ghost'
                    mr={3}
                    bg={'yellow.600'}
                    onClick={onClose}>

                    Close
                </Button>
            </ModalFooter>
        </>

    )
}

export default ModalPreview