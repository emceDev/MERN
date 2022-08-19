import { Order } from "../Nano/Order";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
	loadUserOrders,
	deleteOrder,
	setOrderStatus,
} from "../features/orders/orderSlice";

export const OrderHistory = () => {
	const [orderHistory, setOrderHistory] = useState(false);
	const { userOrders, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.order
	);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	function onLoad() {
		dispatch(loadUserOrders());
	}
	function onDeleteOrder(id) {
		console.log(id);
		dispatch(deleteOrder(id));
	}
	function orderAction(type, id) {
		// console.log({ id, type });
		dispatch(setOrderStatus({ id, type }));
	}
	useEffect(() => {
		onLoad();
	}, []);

	return (
		<div>
			<button className="button" onClick={() => setOrderHistory(!orderHistory)}>
				{orderHistory ? "Minimize" : "Show Orders"}
			</button>

			{!orderHistory ? null : (
				<section className="section is-medium">
					<h1 className="title">Order History</h1>
					<div class="table-container">
						{userOrders ? (
							<div>
								<table class="table has-text-centered">
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

											<th>
												<abbr title="worker working on that task">
													Worker name
												</abbr>
											</th>

											<th>
												<abbr title="order process started">Begin date</abbr>
											</th>
											<th>
												<abbr title="task finalization Date">Finish date</abbr>
											</th>
											<th>
												<abbr title="commment">Comment</abbr>
											</th>
										</tr>
									</thead>
									<tbody>
										{userOrders.map((order) => {
											return order ? (
												<Order
													order={order}
													key={order.id}
													orderAction={(type, id) => orderAction(type, id)}
													userId={user._id}
												/>
											) : null;
										})}
									</tbody>
								</table>
							</div>
						) : (
							<p>no order history for now</p>
						)}
					</div>
				</section>
			)}
		</div>
	);
};
