import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
function Random(){
    const {gif,loading,fetchData} = useGif();
    return (
        <div className="w-1/2  bg-green-400 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 
            className="text-2xl font-bold underline uppercase">
                A Random Gif
            </h1>

            {
                loading ? (<Spinner/>) : (<img className="max-w-[30rem] px-4 object-contain" src={gif} width="450px"/>)
            }
            <button 
            className="w-4/5 py-2 my-2 font-semibold text-center uppercase transition-all rounded-lg bg-white/70 hover:bg-white " onClick={()=>fetchData()}>
                Generate
            </button>
        </div>
    )
}
export default Random;