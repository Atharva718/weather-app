import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FilterDramaIcon from '@mui/icons-material/FilterDrama'; // Cloud
import AirIcon from '@mui/icons-material/Air'; // Wind
import GrainIcon from '@mui/icons-material/Grain'; // Snowflake
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Hot weather
import EmojiNatureIcon from '@mui/icons-material/EmojiNature'; // Rainbow
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent'; // Lightning
import CloudIcon from '@mui/icons-material/Cloud'; // Alternative icon for fog
import './InfoBox.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      {/* Sun icon */}
      <div className="icon sun">
        <WbSunnyIcon fontSize="inherit" />
      </div>
      {/* Water droplet icon */}
      <div className="icon water">
        <OpacityIcon fontSize="inherit" />
      </div>
      {/* Thunderstorm icon */}
      <div className="icon storm">
        <ThunderstormIcon fontSize="inherit" />
      </div>
      {/* Snowflake icon */}
      <div className="icon snow">
        <AcUnitIcon fontSize="inherit" />
      </div>
      {/* Cloud icon */}
      <div className="icon cloud">
        <FilterDramaIcon fontSize="inherit" />
      </div>
      {/* Wind icon */}
      <div className="icon wind">
        <AirIcon fontSize="inherit" />
      </div>
      {/* Additional floating snowflake */}
      <div className="icon extra-snow">
        <GrainIcon fontSize="inherit" />
      </div>
      {/* Hot weather icon */}
      <div className="icon hot">
        <WhatshotIcon fontSize="inherit" />
      </div>
      {/* Rainbow icon */}
      <div className="icon rainbow">
        <EmojiNatureIcon fontSize="inherit" />
      </div>
      {/* Lightning icon */}
      <div className="icon lightning">
        <WbIncandescentIcon fontSize="inherit" />
      </div>
      {/* Cloud icon for fog */}
      <div className="icon fog">
        <CloudIcon fontSize="inherit" />
      </div>
    </div>
  );
}
