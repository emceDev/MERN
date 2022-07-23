import { CreateOrder } from "../Mikro/CreateOrder";
import { OrderHistory } from "../Mikro/OrderHistory";
export const Client = () => {
	return (
		<div className="container ">
			<section className="section ">
				<CreateOrder />

				<OrderHistory />
			</section>
		</div>
	);
};
