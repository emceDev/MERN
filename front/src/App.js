import "./App.css";
import "bulma/css/bulma.min.css";
import { LogReg } from "./Makro/LogReg";
import { Client } from "./Makro/Client";
import { Worker } from "./Makro/Worker";

function App() {
	return (
		<div className="App">
			{/* <LogReg /> */}
			<Client />
			{/* <Worker /> */}
		</div>
	);
}

export default App;
