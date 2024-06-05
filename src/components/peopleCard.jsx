import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PeopleCard = ({ person, onShowVehicles }) => {
  return (
    <Card sx={{ minWidth: 275, flex: '1 0 45%', marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>
          Person Details
        </Typography>
        <Typography variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Height: {person.height}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mass: {person.mass}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Gender: {person.gender}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Edited: {person.edited}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onShowVehicles(person.vehicles)}>Show Vehicles</Button>
      </CardActions>
    </Card>
  );
};

export default PeopleCard;
