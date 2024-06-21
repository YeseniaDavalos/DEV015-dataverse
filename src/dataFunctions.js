export const sortData = (data, sortBy, sortOrder) => {
  const dataORder = data.sort((a, z) => {
    const valueA = a[sortBy];
    const valueZ = z[sortBy];

    if (valueA < valueZ) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (valueA > valueZ) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });
  return dataORder;
};

export const filterData = (data, filterBy, value) => {
  if (filterBy === 'Gender') {
    const filterGender = data.filter((item) => item.facts[filterBy] <= value); //le damos un valor al filtro que llamamos de nuestra data.js
    return filterGender;
  }
  if (filterBy === 'Pet') {
    const filterPet = data.filter((item) => item.facts[filterBy] <= value);
    return filterPet;
  }
  if (filterBy === 'Pet size') {
    const filterSize = data.filter((item) => item.facts[filterBy] <= value); 
    return filterSize; 
  }
};

export const computeStats (data) => {
  // usar reduce
  //crear la funcion computestatsdata
  //realizar calculos segun el criterio
}

