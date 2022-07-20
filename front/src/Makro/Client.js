import { CreateOrder } from "../Mikro/CreateOrder";
import { OrderHistory } from "../Mikro/OrderHistory";
import { OrderList } from "../Mikro/OrderList";

export const Client = () => {
	return (
		<div>
			<OrderHistory />
			<CreateOrder />
			{/* <OrderList /> */}
		</div>
	);
};
