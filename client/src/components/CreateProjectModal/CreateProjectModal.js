import React from 'react'
import { Box, Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Textarea, Select } from '@chakra-ui/react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDisclosure, useColorModeValue } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { createProject } from '../../redux/actions'
import FileBase64 from 'react-file-base64';
//create modal in chakra ui?
export default function CreateProjectModal() {
    const [data, setData] = React.useState({
        title: '',
        description: '',
        image: '',
    });
    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    // how to center Flex in chakra-ui?
    // EventListener > onSubmit
    const onData = React.useCallback(() => {
        // dispatch()
        setData({
            title: '',
            description: '',
            image: ''
        })
    }, [])
    const onSubmit = React.useCallback(() => {
        dispatch(createProject.createProjectRequest(data))
        onData()
        onClose()
    }, [data, dispatch, onData, onClose])
    return (
        <Box>
            <Flex
                align="center"
                justify="center"
            >
                <Button
                    pos="fixed"
                    right={3}
                    bottom={3}
                    w={50}
                    h={50}
                    borderRadius={50}
                    _hover={{ bg: useColorModeValue('red.100', 'gray.900') }}
                    mt={4} onClick={onOpen}>
                    {isOpen ? <MinusIcon /> : <AddIcon />}
                </Button>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create Project</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Flex
                                    direction="column"
                                    gap={3}
                                >
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Title</FormLabel>
                                        <Input type="text"
                                            placeholder="Typing title here..."
                                            value={data.title}
                                            onChange={(e) =>
                                                setData({ ...data, title: e.target.value })}
                                        />
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Description</FormLabel>
                                        <Textarea placeholder="Typing description here..."
                                            value={data.description}
                                            onChange={(e) =>
                                                setData({ ...data, description: e.target.value })
                                            }
                                        ></Textarea>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Status</FormLabel>
                                        <Select>
                                            <option value="Plan">Plan</option>
                                            <option value="Inprogress">Inprogress</option>
                                            <option value="Emergency">Emergency</option>
                                            <option value="Testing">Testing</option>
                                            <option value="Done">Done</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Publish">Publish</option>
                                        </Select>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Date Start</FormLabel>
                                        <Input type="date" placeholder="Typing description here..."
                                        ></Input>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Deadline</FormLabel>
                                        <Input type="date" placeholder="Typing description here..."
                                        ></Input>
                                    </Flex>
                                    {/* <Flex
                                        direction="column"
                                        align="flex-start"
                                    >
                                        <FormLabel>Characters</FormLabel>
                                        <Button>Add Characters</Button>
                                    </Flex> */}
                                    <FileBase64
                                        accept='image/*'
                                        multiple={false}
                                        type='file'
                                        value={data.image}
                                        onDone={({ base64 }) =>
                                            setData({ ...data, image: base64 })
                                        }
                                    />
                                </Flex>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                variant='ghost'
                                mr={3}
                                onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                bg={'yellow.600'}
                                onClick={onSubmit}
                            >Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box >
    )
}
