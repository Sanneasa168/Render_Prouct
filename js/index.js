import{getData}from "../facth_api"
import {Cardcomponent } from "../components/CardComponent";


const renderArea = document.querySelector("#renderArea");
const  Test_url = "http://127.0.0.1:5500/data/products.js";

async function testData(){

    try{
        const res =  await fetch(Test_url);
        const products = await res.json();
        products.forEach((pro)=>{
            renderArea.innerHTML  += Cardcomponent(pro);
        });
    }catch (error) {
        console.error(" Fatch data when worng:", error);
    }
}
testData();