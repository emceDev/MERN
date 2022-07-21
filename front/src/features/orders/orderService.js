import axios from "axios";

const API_URL = "http://localhost:3002/api/order/";

const create = async (orderData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
		},
	};
	const res = await axios.post(API_URL, orderData, config);
	if (res.data) {
		// console.log(res.data);
		window.localStorage.setItem("userOrders", JSON.stringify(res.data));
	}
	// console.log("response====");
	// console.log(res.data.order);
	return res.data.order;
};

const deleteOrder = async (query, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
		},
	};
	const res = await axios.put(
		API_URL + "delete/" + query,
		{ status: "removed" },
		config
	);
	if (res.data) {
		console.log("respons");
		console.log(res.data);
	}
	return res.data;
};

// load {range} number of orders
// if user specified load all orders of user by token
const getUserOrders = async (query, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
			params: { query: query, user: token },
		},
	};
	const res = await axios.get(API_URL + "userOrder", config);
	if (res.data) {
		window.localStorage.setItem("UserOrders", res.data);
	}
	return res.data;
};
const getAllOrders = async (query, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
			params: { query: query, user: token },
		},
	};
	const res = await axios.get(API_URL + "/orderList", config);
	if (res.data) {
		window.localStorage.setItem("Orders", res.data);
	}
	return res.data;
};
const updateOrder = async (url, orderData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
			params: { user: token },
		},
	};
	const res = await axios.put(API_URL + url, orderData, config);

	return res.data;
};
const activateOrder = async (url, token) => {
	const config = {
		headers: {
			Authorization: `Bearer: ${token}`,
			params: { user: token },
		},
	};
	const res = await axios.put(API_URL + url + "/activate", {}, config);

	return res.data;
};
const orderService = {
	create,
	deleteOrder,
	getUserOrders,
	updateOrder,
	getAllOrders,
	activateOrder,
};

export default orderService;
