import places from "./data.json";

export const getPlaces = () => places;

export const getPlaceById = (districtId?: string, placeId?: string) => places.find(({ id}) => districtId === id)?.places.find(({ id }) => id === placeId);

export const getDistrictById = (id?: string) => places.find(({id: placeId}) => placeId === id);