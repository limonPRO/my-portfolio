import Image from "next/image";
import Alter from "../assets/alter.png";

export default function WorkCard({img,title,description,source_code,demo,frameworks}:any){
    return(
        <div className="max-w-[300px] h-[450px] rounded flex flex-col items-center border-2 ">
        <Image className="flex items-center justify-center mt-3" height={200} width={200}  src={img ? img : Alter} alt="no image for this"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-white text-base">
           {description}
          </p>
          <div className=" mt-3">
         <a className=" px-3 py-1 bg-gray-300 text-black font-semibold rounded mr-2 mb-2" href={`https://${source_code}`} >Source Code</a>
        <a className="px-3 py-1 bg-gray-300 text-black font-semibold rounded" href={`https://${demo}`}>Demo</a>
        </div>
       
        </div>
       
        <div className="px-6 pb-2">
        <ul>
        {frameworks.map((framework:any, index:any) => (
        //   <li key={index}>{framework}</li>
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{framework}</span>
        ))}
      </ul>
        </div>
      </div>
    )
}