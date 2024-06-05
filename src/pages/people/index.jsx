import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import SearchBar from '../../components/searchBar';
import GalleryView from '../../components/galleryView';
import Loading from '../../components/loading';
import VehicleModal from '../../components/vehicleModal';
import usePeople from '../../hooks/usePeople';

const PeoplePage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedVehicleIds, setSelectedVehicleIds] = useState([]);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const { people, count, isLoading } = usePeople(page, search);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleShowVehicles = (vehicleIds) => {
    setSelectedVehicleIds(vehicleIds);
    setIsVehicleModalOpen(true);
  };

  const handleCloseVehicleModal = () => {
    setIsVehicleModalOpen(false);
    setSelectedVehicleIds([]);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <SearchBar search={search} onSearchChange={handleSearchChange} />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {isLoading ? <Loading /> : <GalleryView people={people} onShowVehicles={handleShowVehicles} />}
      </Box>
      <Box sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <VehicleModal
        open={isVehicleModalOpen}
        onClose={handleCloseVehicleModal}
        vehicleIds={selectedVehicleIds}
      />
    </Container>
  );
};

export default PeoplePage;
