const url = "https://fakestoreapi.com/products";
export async function getData(endpoint){
    try{
        const data =await fetch(`${Base_Url}${endpoint}`);
        const res = await data.json();
        return res;
    }catch (error){
        console.log("error",error);
    }

}