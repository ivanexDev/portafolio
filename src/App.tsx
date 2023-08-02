import "./App.css";
import { Navbar } from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aboutme } from "./pages/Aboutme";
import { Projects } from "./pages/Projects";
import { Error404 } from "./pages/Error404";

function App() {
	return (
		<>
		
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutme" element={<Aboutme />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			
		</>
	);
}

export default App;
