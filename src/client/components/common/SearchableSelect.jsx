import { Autocomplete, CircularProgress, TextField } from '@mui/material';

const SearchableSelect = ({
  label,
  name,
  value,
  options = [],
  onChange,
  loading = false,
  disabled = false,
  error = false,
  helperText = '',
  placeholder = 'Search and select',
  getOptionLabel,
}) => {
  const getLabel = (option) => {
    if (!option) {
      return '';
    }

    if (getOptionLabel) {
      return getOptionLabel(option);
    }

    return option.name || option.label || '';
  };

  return (
    <Autocomplete
      fullWidth
      value={value}
      options={options}
      loading={loading}
      disabled={disabled}
      onChange={(_, selectedOption) => {
        onChange(name, selectedOption);
      }}
      getOptionLabel={getLabel}
      isOptionEqualToValue={(option, selectedValue) =>
        option?.id === selectedValue?.id
      }
      noOptionsText="No options found"
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps?.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default SearchableSelect;