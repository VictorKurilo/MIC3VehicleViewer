import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const VehicleCard = ({ vehicle }) => {
  return (
    <Card sx={{ minWidth: 275, flex: '1 0 45%', marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>
          Vehicle Details
        </Typography>
        <Typography variant="h5" component="div">
          {vehicle.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Model: {vehicle.model}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Manufacturer: {vehicle.manufacturer}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Class: {vehicle.vehicle_class}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default VehicleCard;
