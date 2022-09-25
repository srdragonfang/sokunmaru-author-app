import React from 'react'
import CreateProjectModal from '../CreateProjectModal/CreateProjectModal'
import ProjectList from '../ProjectList/ProjectList'
const Feed = () => {
    return (
        <div>
            <ProjectList />
            <CreateProjectModal />
        </div>
    )
}

export default Feed