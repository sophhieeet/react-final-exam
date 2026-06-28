import axios from "axios";
import { fallbackCountries } from "../data/fallbackCountries";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  timeout: 8000
});

export async function getCountries() {
  try {
    const response = await countriesApi.get(
      "/all?fields=name,capital,region,population,flags,cca3,area,languages,currencies"
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      return fallbackCountries;
    }

    return response.data;
  } catch (error) {
    console.warn("REST Countries API was not available, using local backup data.", error);
    return fallbackCountries;
  }
}
