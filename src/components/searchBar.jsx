import TextField from '@mui/material/TextField';

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      value={search}
      onChange={onSearchChange}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default SearchBar;
