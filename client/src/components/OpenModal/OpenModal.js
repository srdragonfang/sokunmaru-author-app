import React from 'react'
import { Button, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react'
//create modal in chakra ui?
export default function OpenModal({ title, onClose }) {
    const onSubmit = () => {
        console.log("hey")
    }
    return (
        <>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>Hey</p>
            </ModalBody>

            <ModalFooter>
                <Button
                    variant='ghost'
                    mr={3}
                    onClick={onClose}>
                    Close
                </Button>
                <Button
                    colorScheme='blue'
                    onClick={onSubmit}
                >Submit</Button>
            </ModalFooter>
        </>

    )
}
