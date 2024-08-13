//* Fetching Data on the Server with fetch
//? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
//* const res = await fetch(URL, { cache: "force-cache" }); default
//* const res = await fetch(URL, { cache: "no-store" }); no cache
//*   const res = await fetch(URL, { next: { revalidate: 10 } }); belirlenen saniye cinsinden süre sonunda veriyi tekrar çek tekrar
const URL = `http://localhost:8080/users`;

//* force cache
// export const getUsers = async () => {
//   const res = await fetch(URL);
//   //    'force-cache' is the default, and can be omitted
//   //    const res = await fetch(URL, { cache: 'force-cache' });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

//* revalidate
// export const getUsers = async () => {
//   const res = await fetch(URL);
//   //    'force-cache' is the default, and can be omitted
//   //    const res = await fetch(URL, { cache: 'force-cache' });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

//* no-store
export const getUsers = async () => {
  const res = await fetch(URL, { cache: "no-store" });
  //* This will fetch data dynamically, on every request.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getUsersDetail = async (id) => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });
  //* This will fetch data dynamically, on every request.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
