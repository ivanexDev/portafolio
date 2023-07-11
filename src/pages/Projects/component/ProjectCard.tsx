import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function ProjectCard(data: any) {
	function handleClick() {
		setTimeout(() => window.location.replace(data.url), 500);
	}

	return (
		<Card sx={{ maxWidth: 345 }} onClick={handleClick}>
			<CardActionArea sx={{ background: "#212121" }}>
				<CardMedia
					component="img"
					height="140"
					image={data.img}
					alt={data.title}
				/>
				<CardContent className="card-content">
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ color: "white" }}>
						{data.title}
					</Typography>
					<Typography variant="body2" sx={{ opacity: "0.7", color: "white" }}>
						{data.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default ProjectCard;
