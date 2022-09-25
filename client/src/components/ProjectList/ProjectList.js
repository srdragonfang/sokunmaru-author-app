import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as actions from '../../redux/actions';
import { projectsState$ } from '../../redux/selectors'
import Card from './Card'

export default function ProjectList() {
    const projects = useSelector(projectsState$);
    // console.log("#4 - projects in projectList", projects)
    const dispatch = useDispatch();
    // ket qua tra ve la mot function
    // giup check tu phia UI
    useEffect(() => {
        dispatch(actions.getProjects.getProjectsRequest());
    }, [dispatch])

    return (
        <div>
            <Flex
                direction="row"
                align="center"
                justify="space-around"
                wrap="wrap"
                gap={5}
                px={5}
                py={5}
            >
                {projects.map((project, index) => (
                    <Card key={index} project={project} />
                ))}
            </Flex>
        </div>
    )
}
