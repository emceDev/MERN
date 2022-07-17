import { Order } from "../Nano/Order";
const orders = [
	{
		name: "order",
		creator: "62d18d0c104f8021fe678c80",
		worker: null,
		description: "Sowing",
		status: "waiting",
		created: "01.02.2222-22:22",
		started: null,
		finalized: null,
		comment: null,
	},
	{
		name: "order",
		creator: "62d18d0c104f8021fe678c80",
		worker: null,
		description: "Sowing",
		status: "waiting",
		created: "01.02.2222-22:22",
		started: null,
		finalized: null,
		comment: null,
	},
];
export const OrderList = () => {
	return (
		<div>
			OrderList
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
					{orders.map((order) => {
						return <Order order={order} />;
					})}
				</table>
			</div>
		</div>
	);
};
