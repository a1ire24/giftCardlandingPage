import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

export default function Branches({ branchesDetails, shopName }) {
	return (
		<div>
			<Accordion st={{ mt: 0.5 }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					لیست شعب {shopName.replaceAll("فروشگاه", "")}
				</AccordionSummary>
				<AccordionDetails>
					{branchesDetails.filter( branch => branch.isVisible == 1).map((branchDetails) => (
						<div key={branchDetails.ClientDetailId}>
							<Accordion st={{ mt: 0.5 }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1-content"
									id="panel1-header"
								>
									{branchDetails.BranchName}
									
								</AccordionSummary>
								<AccordionDetails>
									
									
								</AccordionDetails>
							</Accordion>
						</div>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

Branches.propTypes = {
	branchesDetails: PropTypes.array,
	shopName: PropTypes.string
};
