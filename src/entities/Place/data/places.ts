import districts from "./data.json";

export const getDistricts = () => districts;
export const getDistrictById = (id?: string) => districts.find(({id: placeId}) => placeId === id);

export const getAllPlaces = () => districts.flatMap((district) => district.places);
export const getPlaceById = (placeId?: string) => getAllPlaces().find(({ id }) => id === placeId);

