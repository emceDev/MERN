import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Order } from "../Nano/Order";
import { loadAllOrders, activateOrder } from "../features/orders/orderSlice";

export const OrderList = () => {
	const [showList, setShowList] = useState(false);
	const { orders, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.order
	);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	function onLoad() {
		dispatch(loadAllOrders());
	}
	useEffect(() => {
		onLoad();
	}, []);
	// useEffect(() => {
	// 	console.log(orders);
	// }, [orders]);
	function orderAction(type, id) {
		let name = user.name;
		const data = { id, name };
		dispatch(activateOrder(data));
	}
	return (
		<div>
			<button className="button" onClick={() => setShowList(!showList)}>
				{showList ? "Minimize List" : "Show Available Orders"}
			</button>
			{!showList ? null : (
				<section className="section is-medium">
					<h1 className="title">List of available orders</h1>
					<table class="table">
						<thead>
							<tr>
								<th>
									<abbr title="name">Title</abbr>
								</th>
								<th>
									<abbr title="creator">Creator</abbr>
								</th>
								<th>
									<abbr title="description">Description</abbr>
								</th>
								<th>
									<abbr title="status">Status</abbr>
								</th>
								<th>
									<abbr title="creation Date">Created Date</abbr>
								</th>
							</tr>
						</thead>
						{orders ? (
							orders.map((order) => {
								return (
									<Order
										order={order}
										type="worker"
										orderAction={(type, id) => orderAction(type, id)}
									/>
								);
							})
						) : (
							<p>no orders yet!</p>
						)}
					</table>
				</section>
			)}
		</div>
	);
};
