import "./App.css";
import "./styles/mystyles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from "./Makro/Client";
import { Worker } from "./Makro/Worker";
import { Landing } from "./Makro/Landing";
import { Login } from "./Makro/Login";
import { Register } from "./Makro/Register";
import { Navigation } from "./Mikro/Navigation";
import { ProtectedRoute } from "./Mikro/ProtectedRoute";
import { useSelector } from "react-redux";
// import Logo from "./images/landing2.js";
import tractor from "./images/landing.jpg";
function App() {
	const { user } = useSelector((state) => state.auth);
	return (
		<div
			style={{
				// backgroundColor: "red",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
				backgroundPosition: "center",
				minHeight: "100vh",
				backgroundImage: `url(${tractor})`,
			}}
		>
			{/* <Logo
				style={{
					position: "fixed",
					marginTop: "2.5vh",
					height: "95vh",
					width: "100vw",
				}}
			/> */}

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
		</div>
	);
}

export default App;
