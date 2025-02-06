
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AnimatedBackground from './AnimatedBackground'; // Import the animated background


import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Image URLs for different weather conditions
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1661962369601-37be76489d4e?q=80&w=2071&auto=format";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670965294564-9c20dc6a1c5c?q=80&w=1975&auto=format";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Choose image based on weather conditions
  const imageSrc =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  // Choose an icon based on weather conditions
  const WeatherIcon = () => {
    if (info.humidity > 80)
      return <ThunderstormIcon style={{ color: "#2196f3" }} />;
    if (info.temp > 15)
      return <WbSunnyIcon style={{ color: "orange" }} />;
    return <AcUnitIcon style={{ color: "#00bcd4" }} />;
  };

  return (
    
    <div className="InfoBox " >
       <AnimatedBackground className="slider" />

      <div className="cardContainer ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageSrc}
            title={`Weather in ${info.city}`}
          />
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <WeatherIcon />
            </Box>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
