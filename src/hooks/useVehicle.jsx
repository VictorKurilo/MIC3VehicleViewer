import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleInit, fetchVehicleSuccess, fetchVehicleFailure, clearVehicles, fetchVehicleComplete } from '../store/vehicle/actions';
import { getVehicle } from '../api/vehicle';

const useVehicle = (vehicleUrls, open) => {
  const dispatch = useDispatch();
  const { vehicles, isLoading } = useSelector(state => state.vehicle);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchVehicleInit());
      const fetchPromises = vehicleUrls.map(async (url) => {
        const vehicle = await getVehicle(url);
        if (vehicle) {
          dispatch(fetchVehicleSuccess(vehicle));
        } else {
          dispatch(fetchVehicleFailure());
        }
      });

      await Promise.all(fetchPromises);
      dispatch(fetchVehicleComplete());
    };

    if (open) {
      fetchData();
    } else {
      dispatch(clearVehicles());
    }
  }, [dispatch, open, vehicleUrls]);

  return { vehicles, isLoading };
};

export default useVehicle;
