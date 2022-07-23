import axios from "axios";

const API_URL =
	process.env.NODE_ENV === "production"
		? "/api/user/"
		: "http://localhost:3002/api/user/";

const register = async (userData) => {
	const res = await axios.post(API_URL, userData);

	if (res.data) {
		localStorage.setItem("user", JSON.stringify(res.data));
	}
	console.log("response====");
	console.log(res);
	return res.data;
};

const logout = () => {
	localStorage.removeItem("user");
};
const login = async (userData) => {
	const res = await axios.post(API_URL + "login", userData);
	if (res.data) {
		window.localStorage.setItem("user", JSON.stringify(res.data));
	}
	console.log("response====");
	console.log(res);
	return res.data;
};
const authService = {
	register,
	logout,
	login,
};
export default authService;
