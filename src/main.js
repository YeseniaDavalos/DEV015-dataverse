import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { computeStats } from './dataFunctions.js';
//import { fakeData } from './data.js';

import data from "./data/dataset.js";
//import { testData } from "../test/data.js";

const showData = renderItems(data); //cambiar a renderItems
const root = document.querySelector("#root"); // Reemplazado getElementById con querySelector
root.appendChild(showData);

let filteredData = data;

const filterType = document.querySelector("#filter-select"); // Reemplazado getElementById con querySelector
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "pet", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "pet", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "pet", event.target.value))
    );
  } else {
    root.appendChild(renderItems(filterData(data, "pet", event.target.value)));
  }
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterType.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "gender", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "gender", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "gender", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "gender", event.target.value))
    );
  }
});

const filterSize = document.querySelector("#size-select"); // Reemplazado getElementById con querySelector
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

console.log(event.target.value);

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", event.target.value);
  } else {
    filteredData = filterData(data, "petSize", event.target.value);
  }

  if (filterSize.value) {
    root.appendChild(
      renderItems(filterData(filteredData, "petSize", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "petSize", event.target.value))
    );
  }
});

const sort = document.querySelector("#ordenar"); // Reemplazado getElementById con querySelector
sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  
  let orderData;
  if (sortValue === "asc") {
    orderData = sortData(data, "name", sortValue);
  }
  if (sortValue === "desc") {
    orderData = sortData(data, "name", sortValue);
  }
  
  root.innerHTML = "";
  root.appendChild(renderItems(orderData));
});

const clear = document.querySelector("#reset-button"); // Reemplazado getElementById con querySelector
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";

  root.innerHTML = "";
  root.appendChild(showData);
});

/*
const statistics = document.querySelector("#compute-stats-btn"); // Reemplazado getElementById con querySelector
statistics.addEventListener("click", function () {
  const statsDatos = document.createElement('p');
  const computedStats = computeStats(data);
  const petCatAvg = computedStats.petCatAvg;
  const petDogAvg = computedStats.petDogAvg;
  const genderMaleAvg = computedStats.genderMaleAvg;
  const genderFemaleAvg = computedStats.genderFemaleAvg;
  statsDatos.innerHTML = `<p>Tenemos un promedio de ${petCatAvg}% felinos</p>
                          <p>Hay un promedio de ${petDogAvg}% caninos</p>
                          <p>El cual ${genderMaleAvg}% son machos</p>
                          <p>${genderFemaleAvg}% son hembras</p>`;
  root.appendChild(statsDatos);
});
*/