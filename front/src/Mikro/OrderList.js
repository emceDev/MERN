import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Order } from "../Nano/Order";
import { loadUserOrders, updateOrder } from "../features/orders/orderSlice";

export const OrderList = () => {
	const orders = useSelector((state) => state.order);
	const dispatch = useDispatch();
	function onLoad() {
		dispatch(loadUserOrders());
	}
	function onUpdate(id, data) {
		console.log(id, data);
	}
	useEffect(() => {
		onLoad();
	}, []);
	useEffect(() => {
		console.log(orders.orders);
	}, [orders]);

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
					{orders.orders.map((order) => {
						return (
							<Order
								order={order.order}
								// updateOrder={() => onUpdate("123", "123")}
							/>
						);
					})}
				</table>
			</div>
		</div>
	);
};
