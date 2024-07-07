import { Box, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { shops } from "../data/shops.js";
import Branches from "./Branches";

export default function Shops() {
	return shops.filter( shop => shop.isVisible == 1).map((shop) => (
		<Box key={shop.ClientId} sx={{ m: 2 }}>
			<Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
				{shop.ShopName}
			</Typography>
			<Typography sx={{ mt: 2, fontSize: "12px", lineHeight: "22px", fontWeight: 500 }}>
				{shop.Note}
			</Typography>
			<Box display="flex" sx={{mt: 0.5}}>
				<ErrorOutlineRoundedIcon sx={{ fontSize: "15px", mt: 0.5 }} />
				<Typography
					sx={{ fontSize: "12px", lineHeight: "22px", ml: 0.5, fontWeight: 500 }}
				>
					{shop.HowToPayOffline}
				</Typography>
			</Box>
			<Branches branchesDetails={shop.BranchesDetails} shopName={shop.ShopName}/>
		</Box>
	));
}
