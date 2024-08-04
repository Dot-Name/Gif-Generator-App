import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function useGif(tag) {
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    async function fetchData(tag) {   
        try {
            setLoading(true);
            const {data} =  await axios.get(tag?(tagUrl):(randomUrl));
            const imageSource = data.data.images.downsized_large.url;
            console.log("Fetched GIF URL:", imageSource);
            setGif(imageSource);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
    }
    useEffect(()=>{
        fetchData("cats");
    },[]);
    return{gif,loading,fetchData}
    
}
export default useGif;