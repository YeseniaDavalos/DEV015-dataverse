//import { example, anotherExample } from "./src/dataFunctions.js" 
import { data as fakeData } from "./data.js";
import { filterData } from "./dataFunctions.js";

describe("filterData", () => {
  it("should pets by size and return the quantity of cat ", () => {
    const totalCat = filterData(fakeData, "Pet", "Cat");
    expect(totalCat.length).toBe("12"); //¿cuantos gatos tenemos?
  });
});

describe("filterData", () => {
  it("should pets by size and return the quantity of dog ", () => {
    const totalDog = filterData(fakeData, "Pet", "Dog");
    expect(totalDog.length).toBe("12"); //¿cuantos perros tenemos?
  });
});

describe("filterData", () => {
  it("should pets by gender and return the quantity of male", () => {
    const totalPets = filterData(fakeData, "Gender", "Male");
    expect(totalPets.length).toBe("11"); //¿cuantos machos tenemos?
  });
});

describe("filterData", () => {
  it("should pets by gender and return the quantity of female", () => {
    const totalPets = filterData(fakeData, "Gender", "Female");
    expect(totalPets.length).toBe("13"); //¿cuantas hembras tenemos?
  });
});

describe("filterData", () => {
  it("should pets by size and return the quantity of small ", () => {
    const totalSizeSmall = filterData(fakeData, "Pet size", "Small");
    expect(totalSizeSmall.length).toBe("14"); //¿cuantos pequeños tenemos?
  });
});

describe("filterData", () => {
  it("should pets by size and return the quantity of big ", () => {
    const totalSizeBig = filterData(fakeData, "Pet size", "Big");
    expect(totalSizeBig.length).toBe("10"); //¿cuantos grandes tenemos?
  });
});
