import axios from "axios"

const axiosInstance = axios.create({
	baseURL:"/blog"
});

/*拦截器*/
axiosInstance.interceptors.request.use((config) => {
	return config;
},(error) => {
	console.log(error);
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
	return response;
},(error) => {
	return Promise.reject(error);
});

export default axiosInstance;