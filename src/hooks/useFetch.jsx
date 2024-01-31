export const useFetch =async ()=>{
    const data =  await fetch("https://type.fit/api/quotes");
    return data.json();
}