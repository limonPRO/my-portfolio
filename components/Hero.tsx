import Image from "next/image";

import limon from "../assets/limon.jpg";

export default function Hero() {
  return (
    <div className="">
      {/* about me  */}
      <div className="flex items-center justify-center flex-row pt-10  space-x-5  ">
        {/* <div className="relative"> */}
        {/* <div className="h-[15px] w-[150px] bg-white box-border border-2"/> */}
        <div className=" relative box-border h-[230px] w-[190px] p-4 border-4 border-[#2b106a] ...">
          <Image
            className=" absolute"
            width={150}
            height={150}
            src={limon}
            alt="Limon"
          />
        </div>
        <div className="text-white">
          <h4 className="font-bold">
            My name is <span className="text-3xl"> Limon Shah</span>{" "}
          </h4>
          <p className="pt-5">
            I am a full stack web developer.
            <br /> I have experience as a software developer.I am working with
            Node js,Nest js,Express js,Next js,React and React Native.
          </p>
        </div>
      </div>

      {/* skills */}
      <div className="text-white">
        <h2 className="text-4xl font-bold flex items-center justify-center flex-row pt-10  space-x-5">
          My Skills
        </h2>
        <div className="flex items-center justify-center space-x-4 mt-3">
          <div className="">
            <h4 className="p-3 bg-[#2b106a] rounded">Backend Framworks</h4>
            <p>Node js</p>
            <p>Express js</p>
            <p>Nest js</p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded">Frontend FrameWorks</h4>
            <p> React js </p>
            <p> Next js</p>
            <p> React Native</p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded">Databases</h4>
            <p> MySql </p>
            <p> MongoDb</p>
            <p> Postgresql</p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded">Programming Languages</h4>
            <p> JavaScript </p>
            <p> Python</p>
            <p> C</p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded">Familier</h4>
            <p> Redex </p>
            <p> Context Api</p>
            <p> Material UI</p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded">Also Knows</h4>
            <p> React Query</p>
            <p> Prisma</p>
            <p> typeORM</p>
          </div>
        </div>
      </div>
      {/* my work */}
      <div className="text-white">
      <h2 className="text-4xl font-bold flex items-center justify-center flex-row pt-10  space-x-5">
          My Work
        </h2>
      </div>
    </div>
  );
}
