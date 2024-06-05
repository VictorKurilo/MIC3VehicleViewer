import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import VehicleCard from './vehicleCard';
import Loading from './loading';
import useVehicle from '../hooks/useVehicle';

const VehicleModal = ({ open, onClose, vehicleIds }) => {
  const { vehicles, isLoading } = useVehicle(vehicleIds, open);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Vehicles</DialogTitle>
      <DialogContent>
        {isLoading ? (
          <Loading />
        ) : (
          vehicles.map(vehicle => <VehicleCard key={vehicle.url} vehicle={vehicle} />)
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VehicleModal;
