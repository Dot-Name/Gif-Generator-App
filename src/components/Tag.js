import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
function Tag(){
    const [tag, setTag] = useState("Cats");
    const {gif, loading, fetchData} = useGif(tag);
    return( 
        <div className="flex flex-col items-center justify-center w-full gap-4 py-4 overflow-hidden bg-blue-400 border-2 border-gray-500 lg:w-1/2 aspect-auto rounded-2xl">

        <h1 className="text-xl font-bold text-center underline uppercase md:text-2xl">Random {tag} GIF</h1>

        {
                loading ? (<Spinner/>) : (<img className="max-w-[30rem] px-4 object-contain" src={gif} width="450px"/>)
        }


            <input className="w-10/12 px-3 py-2 text-sm text-center border border-gray-300 rounded-md md:w-4/5 focus:z-10 lg:text-lg" type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>

            <button className="w-4/5 py-2 my-2 font-semibold uppercase transition-all rounded-lg bg-white/70 hover:bg-white" onClick={()=>fetchData(tag)}>Generate</button>

        </div>
    )
}
export default Tag;