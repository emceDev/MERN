export const Order = (props) => {
	function dateParser(string) {
		let date = new Date(string);
		let m = date.getMonth() + 1;
		let d = date.getDay();
		let y = date.getFullYear();
		let hr = date.getHours();
		let min = date.getMinutes();
		return `${d}-${m}-${y}:${hr}-${min}`;
	}
	const {
		_id,
		name,
		creator,
		creatorName,
		workerName,
		worker,
		description,
		status,
		comment,
		finishedDate,
		createdDate,
		startedDate,
	} = props.order;
	return (
		<tr key={_id}>
			<td>{name}</td>
			<td>{creatorName}</td>
			{workerName ? <td>{workerName}</td> : <td></td>}
			<td>{description}</td>
			<td>{status}</td>
			<td>{dateParser(createdDate)}</td>
			{startedDate ? <td>{dateParser(startedDate)}</td> : null}
			{finishedDate ? <td>{dateParser(finishedDate)}</td> : null}
			{comment ? <td>{comment}</td> : null}
			{/* BUTTON LOGIC ON the front
			delete button
				-when creator=user
				-when status!==removed
				-when status!==active
			activate button
				-when creator!=user
				-when order!=deleted
				-when status!==active
			finish button
				-when worker||creator===creator or worker
				-when status===in-progress */}
			{(props.userId === creator && status === "finished") ||
			(props.userId === creator && status === "waiting") ? (
				<button
					className="button"
					onClick={() => props.orderAction("removed", _id)}
				>
					Remove
				</button>
			) : creator !== props.userId &&
			  status !== "removed" &&
			  status !== "in-progress" &&
			  status !== "finished" ? (
				<button
					className="button"
					onClick={() => props.orderAction("in-progress", _id)}
				>
					Activate
				</button>
			) : (status === "in-progress" && props.userId === creator) ||
			  (status === "in-progress" && props.userId === worker) ? (
				<button
					className="button"
					onClick={() => props.orderAction("finished", _id)}
				>
					Finish
				</button>
			) : (
				<p></p>
			)}
		</tr>
	);
};
