import { OrderHistory } from "../Mikro/OrderHistory";
import { OrderList } from "../Mikro/OrderList";

export const Worker = () => {
	return (
		<div className="container">
			<section class="section">
				<OrderList />
				<OrderHistory />
			</section>
		</div>
	);
};
