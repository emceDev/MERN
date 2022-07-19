import { useState } from "react";
// import { Login } from "./Login";
// import { Register } from "./Register";

export const LogReg = () => {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<div>
			<button onClick={() => setIsLogin(!isLogin)}>
				{isLogin ? "Register" : "LogIn"}
			</button>
			{/* <div>{isLogin ? <Login /> : <Register />}</div> */}
		</div>
	);
};
