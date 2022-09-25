import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { useDisclosure, useColorModeValue } from '@chakra-ui/react'
import ModalPreview from './ModalPreview'
import ModalEdit from './ModalEdit'
import ModalSetting from './ModalSetting'
//create modal in chakra ui?
export default function ModalButton({Icon, title, modalEdit, modalPreview, data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>
            <Button
                bg={"transparent"}
                _hover={{ bg: useColorModeValue('red.100', 'gray.900') }}
                onClick={onOpen}>
                {Icon && <Icon />}
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                {modalPreview 
                ? <ModalPreview title={title} onClose={onClose} data={data} /> 
                : modalEdit ? <ModalEdit title={title} onClose={onClose} /> 
                : <ModalSetting title={title} onClose={onClose} /> }
                </ModalContent>
            </Modal>
        </>
    )
}
