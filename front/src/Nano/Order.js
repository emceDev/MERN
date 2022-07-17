export const Order = (props) => {
	const {
		name,
		creator,
		worker,
		description,
		status,
		created,
		started,
		finalized,
		comment,
	} = props.order;
	return (
		<tr>
			<td>{name}</td>
			<td>{creator}</td>
			{worker ? <td>{worker}</td> : null}
			<td>{description}</td>
			<td>{status}</td>
			<td>{created}</td>
			{started ? <td>{started}</td> : null}
			{finalized ? <td>{finalized}</td> : null}
			{comment ? <td>{comment}</td> : null}
		</tr>
	);
};
