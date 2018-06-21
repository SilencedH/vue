import axiosInstance from './config'

let config = {
	ContentType:"application/json;charset=utf-8"
}

/*获取菜单和子菜单*/
const getMenus = ()=>{
	return axiosInstance.get("/menus");
};

/*获取所有主题主要信息*/
const getSubjects = () => {
	return axiosInstance.get("/subjects");
};
/*根据主题获取文档列表*/
const getSubjectDocuments = (params) => {
	return axiosInstance.get("/subject/documents",{params:params});
};
/*根据关键字获取文档列表*/
const getKeyWordsDocuments = (params) => {
	return axiosInstance.get("/keywords/documents",{params:params});
};
/*根据文档编号获取文档信息*/
const getDocumentByCode = (params) => {
	return axiosInstance.get("/document/" + params);
};
/*根据文档编号获取文档评论信息*/
const getDocumentComments = (params) => {
	return axiosInstance.get("/document/comments",{params:params});
};
/*提交评论*/
const insertComment = (params) => {
	return axiosInstance.post("/comment",params);
};
/*获取所有文档列表，按照时间倒序*/
const getDocuments = (params) => {
	return axiosInstance.get("/documents",{params:params});
};



/*===========================废弃=================================*/
/*根据子菜单编号获取专题列表*/
const getSubjectsBySubMenuCode = (params)=>{
	return axiosInstance.get("/submenu/subjects",{params:params});
};






const api = {
	getMenus:getMenus,
	getSubjectsBySubMenuCode:getSubjectsBySubMenuCode,
	getSubjects:getSubjects,
	getSubjectDocuments:getSubjectDocuments,
	getKeyWordsDocuments:getKeyWordsDocuments,
	getDocument:getDocumentByCode,
	getDocumentComments:getDocumentComments,
	insertComment:insertComment,
	getDocuments:getDocuments
};
export default api;