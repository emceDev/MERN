import "./App.css";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from "./Makro/Client";
import { Worker } from "./Makro/Worker";
import { Landing } from "./Makro/Landing";
import { Login } from "./Makro/Login";
import { Register } from "./Makro/Register";
import { Navigation } from "./Mikro/Navigation";
import { ProtectedRoute } from "./Mikro/ProtectedRoute";
import { useSelector } from "react-redux";
function App() {
	const { user } = useSelector((state) => state.auth);
	return (
		<>
			<Router>
				<div>
					<Navigation />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />

						<Route
							path="/Client"
							element={
								<ProtectedRoute user={user}>
									<Client />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/Worker"
							element={
								<ProtectedRoute user={user}>
									<Worker />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
