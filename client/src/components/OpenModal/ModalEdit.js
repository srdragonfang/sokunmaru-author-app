import React from 'react'
import { Button, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react'

const ModalEdit = ({title, onClose}) => {
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

export default ModalEdit