import { getData } from "../stored/fatch_aip.js";
import  {CardComponent } from "../components/CardComponent.js";

const renderArea = document.querySelector("#renderArea");
const url = "http://127.0.0.1:5500/data/products.json";

async function testFetchData() {
  try {
    const res = await fetch(url);
    const pro = await res.json();
    pro.forEach((product) => {
      renderArea.innerHTML += CardComponent(product);
    });
  } catch (error) {
    console.error("Fatching Data went wrong", error);
  }
}

testFetchData();
