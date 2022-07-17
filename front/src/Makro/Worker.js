import { OrderHistory } from "../Mikro/OrderHistory";
import { OrderList } from "../Mikro/OrderList";

export const Worker = () => {
	return (
		<div>
			<OrderHistory />
			<OrderList />
		</div>
	);
};
