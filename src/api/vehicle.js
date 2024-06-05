import axios from 'axios';

export const getVehicle = async (vehicleUrl) => {
  try {
    const response = await axios.get(vehicleUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    return null;
  }
};
