import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { computeStats } from './dataFunctions.js';
import { computeStats } from './dataFunctions.spec.js';

import data from "./data/dataset.js";

const showData = renderItems(data); //cambiar a renderItems
const root = document.getElementById("root");
root.appendChild(showData);

let filteredData = data;

/*const typeValue = filterType.value;
  const genderValue = filterGender.value;
  const sizeValue = filterSize.value;*/

const filterType = document.getElementById("filter-select");
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "Pet", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "Pet", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "Pet", event.target.value))
    );
  } else {
    root.appendChild(renderItems(filterData(data, "Pet", event.target.value)));
  }
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterType.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "Gender", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "Gender", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "Gender", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "Gender", event.target.value))
    );
  }
});

const filterSize = document.getElementById("size-select");
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterSize.value) {
    filteredData = filterData(filteredData, "Pet size", event.target.value);
  } else {
    filteredData = filterData(data, "Pet size", event.target.value);
  }

  if (filterSize.value) {
    root.appendChild(
      renderItems(filterData(filteredData, "Pet size", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "Pet size", event.target.value))
    );
  }
});

const sort = document.getElementById("ordenar");
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

const clear = document.getElementById("reset-button");
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";
});

const statistics = document.getElementById("compute-stats-btn")
statistics.addEventListener('click', function () {
  const stats = computeStats(data);
  
  //proporcionar la data para los calculos
  //calcular cuanto gstos perros female , male, big, small la tenemos ok en la carpeta. spect.js
}
)