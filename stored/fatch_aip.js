const url = "https://jsonplaceholder.typicode.com/";
export async function getData(endpoint){
    try{
        const data =await fetch(`${Base_Url}${endpoint}`);
        const res = await data.json();
        return res;
    }catch (error){
        console.log("error Url",error);
    }

}