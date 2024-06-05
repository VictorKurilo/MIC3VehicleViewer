import Box from '@mui/material/Box';
import PeopleCard from './peopleCard';

const GalleryView = ({ people, onShowVehicles }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, width: '100%' }}>
      {people.map((person, index) => (
        <PeopleCard key={index} person={person} onShowVehicles={onShowVehicles} />
      ))}
    </Box>
  );
};

export default GalleryView;
