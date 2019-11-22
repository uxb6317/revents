import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export const getLatLngFromAddress = async address => {
  const result = await geocodeByAddress(address);
  return await getLatLng(result[0]);
};
