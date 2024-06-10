import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardDesign: React.FC<{}> = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./../image/download.jpg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Api Test
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please note that this API is marked unstable and may be subject to
            breaking changes without a major release
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardDesign;
