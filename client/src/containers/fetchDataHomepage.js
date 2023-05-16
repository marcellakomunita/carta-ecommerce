const fetchDataHomepage = async ({ queryKey }) => {
  const baseUrl = "http://localhost:3030/carta-api/";
  const apis = {
    newProducts: baseUrl + "products/new-beauty",
    bestieDeals: baseUrl + "products/bestie-deals",
    // mustHave
  };

  const res = {};
  for (const api in apis) {
    try {
      const response = await fetch(apis[api]);
      if (!response.ok) {
        throw new Error(`API fetch failed for ${api}`);
      }
      res[api] = await response.json();
    } catch (error) {
      throw new Error(`Error fetching data for ${api}: ${error.message}`);
    }
  }

  return res;
};

export default fetchDataHomepage;
