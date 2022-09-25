// Một library giúp tạo ra các actions
import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
	return reduxAction().type;
};
// Đối với một action thực hiện site effect như call api thì có 3 actions cho hành động đó.
// 1. Gửi request
// 2. Khi success
// 3. Khi failure
// action: getProjects = lấy hết tất cả dữ liệu từ database
// co the tao nhieu action mot luc bang method createActions()
export const getProjects = createActions({
	// 1. Khi gui mot request thi goi action
	getProjectsRequest: undefined,
	// undefined khi khong co mot payload nao cho truong hop request
	// Khi goi action thanh cong
	getProjectsSuccess: (payload) => payload,
	// Khi goi action that bai
	getProjectsFailure: (err) => err,
});

export const createProject = createActions({
	createProjectRequest: (payload) => payload,
	createProjectSuccess: (payload) => payload,
	createProjectFailure: (err) => err,
});

export const updateProject = createActions({
	updateProjectRequest: (payload) => payload,
	updateProjectSuccess: (payload) => payload,
	updateProjectFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
