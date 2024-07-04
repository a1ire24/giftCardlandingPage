import Box from "@mui/material/Box";

import Header from "./components/Header.jsx";
import Shops from "./components/Shops.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Header/>
			<Shops/>
			<Footer/> 
		</Box>
	);
}

export default App;
