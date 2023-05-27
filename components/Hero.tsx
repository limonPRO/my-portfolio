import Image from "next/image";

import limon from "../assets/limon.jpg"

export default function Hero() {
  return (
    <div className="">
      <div className="">
        <div>
            <Image width={30} height={30} src={limon} alt=""/>
        </div>
        <div className="text-white">
            <h4>Limon Shah</h4>
            <p>I am a full stack web developer . I have experience as a software developer .I am working with Node js , nest js ,express js ,Next js  and react js .
            </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
