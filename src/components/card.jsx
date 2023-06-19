import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ id, title, description, link, img }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small" href={link}>Leer Más</Button>
      </CardActions>
    </Card>
  );
}
