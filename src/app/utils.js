export const getUniqueKeysFromArrayOfObject = (arrayOfObjects) => {
// Get all the keys from each object and flatten them into a single array
const allKeys = [...new Set(arrayOfObjects.flatMap(obj => Object.keys(obj)))];
return allKeys;

// const allKeys = arrayOfObjects.flatMap(obj => Object.keys(obj));
// const flippedObj = allKeys.reduce((res, key) => {
//     // Reverse the key and value
//     res[value] = key;
//     return res;
//   }, {});
//   console.log({allKeys, flippedObj});
//   return [];

};

