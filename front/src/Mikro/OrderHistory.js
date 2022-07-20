import { Order } from "../Nano/Order";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadUserOrders } from "../features/orders/orderSlice";

export const OrderHistory = () => {
	// const [or, setOr] = useState(null);
	const { userOrders, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.order
	);
	const dispatch = useDispatch();
	function onLoad() {
		console.log("loading ");
		dispatch(loadUserOrders());
	}
	useEffect(() => {
		console.log("mounted");
		onLoad();
	}, []);
	useEffect(() => {
		console.log("ordersChanges");
		console.log(userOrders);
		// setOr(userOrders);
	}, [userOrders]);
	return (
		<div>
			OrderHistory
			{userOrders ? (
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
									<abbr title="worker">Worker</abbr>
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
								<th>
									<abbr title="order process started">OPD</abbr>
								</th>
								<th>
									<abbr title="finalization Date">Final</abbr>
								</th>
								<th>
									<abbr title="commment">Comm</abbr>
								</th>
							</tr>
						</thead>
						{userOrders.map((order) => {
							return <Order order={order} />;
						})}
					</table>
				</div>
			) : (
				<p>no order history for now</p>
			)}
		</div>
	);
};
