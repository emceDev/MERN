import { Order } from "../Nano/Order";
const orders = [
	{
		name: "order",
		creator: "62d18d0c104f8021fe678c80",
		worker: "62d18d0c104f8021fe678c80",
		description: "Sowing",
		status: "finalized",
		created: "01.02.2222-22:22",
		started: "01.02.2222-22:22",
		finalized: "01.02.2222-22:22",
		comment: "good work",
	},
	{
		name: "order",
		creator: "62d18d0c104f8021fe678c80",
		worker: "62d18d0c104f8021fe678c80",
		description: "Sowing",
		status: "finalized",
		created: "01.02.2222-22:22",
		started: "01.02.2222-22:22",
		finalized: "01.02.2222-22:22",
		comment: "good work",
	},
];
export const OrderHistory = () => {
	return (
		<div>
			OrderHistory
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
					{orders.map((order) => {
						return <Order order={order} />;
					})}
				</table>
			</div>
		</div>
	);
};
