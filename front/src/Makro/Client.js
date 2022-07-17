import { CreateOrder } from "../Mikro/CreateOrder";
import { OrderHistory } from "../Mikro/OrderHistory";

export const Client = () => {
	return (
		<div>
			<OrderHistory />
			<CreateOrder />
		</div>
	);
};
