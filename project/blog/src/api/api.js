import axiosInstance from "./config";

/*菜单*/
const menus = () => {
	return axiosInstance.get("/menus");
};
/*所有文档列表*/
const docs = (params) => {
	return axiosInstance.get("/docs",{params:params});
};
/*所有标签*/
const tags = () => {
	return axiosInstance.get("/tags");
};
/*根据menuCode获取文档列表*/
const docsByMenuCode = (params) => {
	return axiosInstance.get("/menu/docs",{params:params});
};
/*根据tagCode获取文档列表*/
const docsByTagCode = (params) => {
	return axiosInstance.get("/tag/docs",{params:params});
};
/*根据menuCode获取tags*/
const tagsByMenuCode = (params) => {
	return axiosInstance.get("/menu/tags/",{params:params});
};
/*根据docCode获取document*/
const docByDocCode = (code) => {
	return axiosInstance.get("/doc/" + code);
};
/*根据docCode获取comment*/
const commentByDocCode = (params) => {
	return axiosInstance.get("/doc/comments",{params:params});
};
/*提交评论*/
const insertComment = (params) => {
	return axiosInstance.post("/comment",params);
};

const api = {
	menus:menus,
	tags:tags,
	docs:docs,
	docsByMenuCode:docsByMenuCode,
	docsByTagCode:docsByTagCode,
	tagsByMenuCode:tagsByMenuCode,
	docByDocCode:docByDocCode,
	commentByDocCode:commentByDocCode,
	insertComment:insertComment

};
export default api;