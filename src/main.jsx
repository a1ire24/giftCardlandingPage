import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Favicon from "react-favicon";

import "normalize.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./fonts/iranyekan/style.css"

import favicon from "./assets/images/favicon.png";


const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
	direction: "rtl",
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Favicon url={favicon} />
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</CacheProvider>
	</React.StrictMode>
);
