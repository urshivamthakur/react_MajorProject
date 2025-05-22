import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AcUnit, Thunderstorm, Sunny } from "@mui/icons-material";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  let RAIN_URL =
    "https://images.unsplash.com/photo-1638829971615-94cee319942e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

  let COLD_URL =
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8fHww";

  let HOT_URL =
    "https://images.unsplash.com/photo-1735806362172-9d343049b597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1biUyMHJpc3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <>
      <br />
      <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 83
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"> {info.city}&nbsp;
              {info.humidity > 83
                ? < Thunderstorm />
                : info.temp > 25
                ? < Sunny />
                : < AcUnit />}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature - {info.temp}&deg;C</p>
              <p>Humidity - {info.humidity}</p>
              <p>Min Temp - {info.temp_min}&deg;C</p>
              <p>Max Temp - {info.temp_max}&deg;C</p>
              <p>
                The weather can be descirbed as <i>{info.weather}</i> and feels
                like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
