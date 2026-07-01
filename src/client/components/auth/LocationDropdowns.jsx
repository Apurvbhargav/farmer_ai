import { Stack } from '@mui/material';
import SearchableSelect from '../common/SearchableSelect';

const LocationDropdowns = ({
  values,
  errors = {},
  states = [],
  districts = [],
  villages = [],
  loadingStates = false,
  loadingDistricts = false,
  loadingVillages = false,
  onChange,
}) => {
  return (
    <Stack spacing={2.25}>
      <SearchableSelect
        label="State"
        name="state"
        value={values.state}
        options={states}
        loading={loadingStates}
        onChange={onChange}
        error={Boolean(errors.state)}
        helperText={errors.state}
        placeholder="Search state"
      />

      <SearchableSelect
        label="District"
        name="district"
        value={values.district}
        options={districts}
        loading={loadingDistricts}
        disabled={!values.state}
        onChange={onChange}
        error={Boolean(errors.district)}
        helperText={errors.district}
        placeholder="Search district"
      />

      <SearchableSelect
        label="Village"
        name="village"
        value={values.village}
        options={villages}
        loading={loadingVillages}
        disabled={!values.district}
        onChange={onChange}
        error={Boolean(errors.village)}
        helperText={errors.village}
        placeholder="Search village"
      />
    </Stack>
  );
};

export default LocationDropdowns;