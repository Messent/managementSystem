import request from './request'		// 引入request.js

const path = process.env.NODE_ENV === 'development' ? 'api/' : ''		// 根据开发环境获取path路径

// 登录请求
export const loginApi = params => request.post(`${path}/tokens`, params)


// 注销登录
export const logoutApi = params => request.delete(`${path}/tokens`, {params})


// 获取员工列表
export const employeeApi = params => request.get(`${path}/employees`, {params})


// 获取部门列表
export const departmentListApi = params => request.get(`${path}/departments`, {params})