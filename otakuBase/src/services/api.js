const BASE_URL = "https://api.jikan.moe/v4";

export const getTrendingAnime = async () => {
  try {
    const response = await fetch(`${BASE_URL}/seasons/now`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch trending anime:", error);
    return [];
  }
};

export const getTopAnime = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top/anime`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return [];
  }
};
