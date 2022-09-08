import { get } from '@/js/services/apiService';

export const getCharacterById = async (id) => {
  try {
    return get(`${process.env.API_URL}/id/${id}`);
  } catch (error) {
    console.error(`Error fetching character ${id}: ${error.message}`);
    return [];
  }
};

export const getCharactersAll = async () => {
  try {
    return get(`${process.env.API_URL}/all/`);
  } catch (error) {
    console.error(`Error fetching characters: ${error.message}`);
    return [];
  }
};
