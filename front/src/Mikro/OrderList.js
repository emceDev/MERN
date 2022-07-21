import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Order } from "../Nano/Order";
import { loadAllOrders, activateOrder } from "../features/orders/orderSlice";

export const OrderList = () => {
	const { orders, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.order
	);
	const dispatch = useDispatch();
	function onLoad() {
		dispatch(loadAllOrders());
	}
	useEffect(() => {
		onLoad();
	}, []);
	useEffect(() => {
		console.log(orders);
	}, [orders]);
	function onActivateOrder(id) {
		console.log("activating id");
		console.log(id);
		dispatch(activateOrder(id));
	}
	return (
		<div>
			<div>
				<table class="table">
					<thead>
						<tr>
							<th>
								<abbr title="name">Name</abbr>
							</th>
							<th>
								<abbr title="creator">Creator</abbr>
							</th>
							<th>
								<abbr title="description">Desc</abbr>
							</th>
							<th>
								<abbr title="status">Stat</abbr>
							</th>
							<th>
								<abbr title="creation Date">Created</abbr>
							</th>
						</tr>
					</thead>
					{orders ? (
						orders.map((order) => {
							return (
								<Order
									order={order}
									type="worker"
									deleteOrder={(id) => onActivateOrder(id)}
								/>
							);
						})
					) : (
						<p>no orderds yet!</p>
					)}
				</table>
			</div>
		</div>
	);
};
