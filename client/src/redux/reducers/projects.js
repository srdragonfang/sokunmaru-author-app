import { INIT_STATE } from '../../constant';
import { createProject, getProjects, getType } from '../actions';

export default function projectReducers(state = INIT_STATE.projects, action) {
    switch (action.type) {
        // getProjects.getProjectsRequest() la mot string nen can boc boi getType
        // case: getProjectsRequest
        case getType(getProjects.getProjectsRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getProjects.getProjectsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        // case: getProjectsFailure
        case getType(getProjects.getProjectsFailure):
            return {
                ...state,
                isLoading: false,
            };
        case getType(createProject.createProjectSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}
