import "./App.css";
import { Navbar } from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aboutme } from "./pages/Aboutme";
import { Projects } from "./pages/Projects";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutme" element={<Aboutme />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
