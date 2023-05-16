const fetchProduct = async ({ queryKey }) => {
  const id = queryKey[1].split("-")[0];
  const apiRes = await fetch(
    `http://localhost:3030/carta-api/products?id=${id}`
  );

  if (!apiRes.ok) {
    throw new Error(`details ${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchProduct;
