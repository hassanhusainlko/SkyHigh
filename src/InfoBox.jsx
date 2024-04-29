import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_IMG =
    "https://plus.unsplash.com/premium_photo-1677734314009-39dc029b2ff8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_IMG}
            title="eather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.weather}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max-Temp = {info.temp_max}&deg;C</p>
              <p>Min-Temp = {info.temp_min}&deg;C</p>
              <p>
                The weather can be describe as <i>{info.weather}</i> and feels
                like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
