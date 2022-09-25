import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';
function* fetchProjectSaga(action) {
	try {
		// yeild cú pháp khi xử lí generator function
		// về cơ bản thì giống như async await
		const projects = yield call(api.fetchProjects);
		// console.log('sagas/fetchProjectSaga');
		console.log('[projects]', projects);
		// call = khi muốn thực thi một function thì gọi call
		// trường hợp call tới một promise thì function này sẽ đợi cho tới khi function này được restone, khi có kết quả trả về thì yeild mới hoàn thành xong.
		yield put(actions.getProjects.getProjectsSuccess(projects.data));
	} catch (err) {
        console.error(err);
        yield put(actions.getProjects.getProjectsFailure(err))
    }
}

function* createProjectSaga(action) {
	try {
		const project = yield call(api.createProject, action.payload);
        // console.log('[createProject aga]', project);

		yield put(actions.createProject.createProjectSuccess(project.data));
	} catch (err) {
        console.error(err);
        yield put(actions.createProject.createProjectFailure(err))
    }
}

function* mySaga() {
	yield takeLatest(actions.getProjects.getProjectsRequest, fetchProjectSaga);
	yield takeLatest(actions.createProject.createProjectRequest, createProjectSaga);
	// console.log('step 2 - sagas/mysaga');
	// takeLatest: giả dụ ở phía UI có nhiều action một lúc thì chỉ có action cuối cùng là được xử lí dữ liệu
	// tất cả các saga xử lí cho tất cả các action trước đó mà chưa kết thúc thì nó sẽ bị cancel hết
}
export default mySaga;
