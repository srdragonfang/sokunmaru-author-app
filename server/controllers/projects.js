import { ProjectModel } from '../models/ProjectModel.js';

export const getProjects = async (req, res) => {
	try {
        // const post = new ProjectModel({
        //     title: "test",
        //     description: 'test-description'
        // })
        // post.save();

		const projects = await ProjectModel.find();
		// mặc định khi gọi find() sẽ return tất cả các bài post
		// console.log('projects return from database', projects);
		res.status(200).json(projects);
		// response về cho client một status thành công (200)
		// .json(projects) là dữ liệu tất cả các bài viết
	} catch (err) {
		res.status(500).json({ error: err });
        console.log('error 500')
	}
};

export const createProject = async (req, res) => {
    // default:
    // res.send('Create Success')
	try {
		const newProjectModel = req.body;
		const project = new ProjectModel(newProjectModel);
		await project.save();
		res.status(200).json(project);
	} catch (err) {
		res.status(500).json({ error: err });
	}
};

export const updateProject = async (req, res) => {
	try {
		// vẫn trả về dữ liệu cũ - khi chưa cập nhật
        // const updateProject = await req.findOneAndUpdate({_id: updateProject._id}, updateProject); 
		// trả về dữ liệu mới
        const updateProject = await req.findOneAndUpdate({_id: updateProject._id}, updateProject, {new: true}); 


		const project = new ProjectModel(updateProject);
		await project.save();
		res.status(200).json(project);
	} catch (err) {
		res.status(500).json({ error: err });
	}
};
