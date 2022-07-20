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

const deleteOrder = async () => {
	localStorage.removeItem("user");
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
		// console.log(res.data);
		window.localStorage.setItem("UserOrders", res.data);
	}
	// console.log("response====");
	// console.log(res.data);
	// console.log("response====");
	return res.data;
};
const orderService = {
	create,
	deleteOrder,
	getUserOrders,
};

export default orderService;
