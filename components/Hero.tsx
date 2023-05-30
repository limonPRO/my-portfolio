import Image from "next/image";

import limon from "../assets/limon.jpg";
import CImage from "../assets/icons/C.png"
import WorkCard from "./WorkCard";
import { FaNodeJs } from 'react-icons/fa';
import {SiExpress ,SiTypescript,SiNestjs ,SiMysql,SiMongodb,SiPostgresql,SiJavascript,SiPython,SiRedux ,SiAmazonaws,SiMui,SiReactquery,SiPrisma,} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FiType} from 'react-icons/fi'
import {TbBrandNextjs,TbBrandReactNative ,TbBrandVscode} from 'react-icons/tb'
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Exprience";

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
        <div className="flex items-center justify-center space-x-10 pt-10">
          <div className="">
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Backend Framworks</h4>
            <p className="flex items-center mb-3 ">Node js <span className="ml-2"> <FaNodeJs size={20}/></span> </p>
            <p className="flex items-center mb-3 ">Express js <span className="ml-2"><SiExpress/></span></p>
            <p className="flex items-center mb-3 ">Nest js <span className="ml-2"><SiNestjs/> </span></p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Frontend FrameWorks</h4>
            <p className="flex items-center mb-3 "> React js <span className="ml-2"><GrReactjs/></span></p>
            <p className="flex items-center mb-3 "> Next js <span className="ml-2"><TbBrandNextjs/></span></p>
            <p className="flex items-center mb-3 "> React Native <span className="ml-2"><TbBrandReactNative/></span></p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Databases</h4>
            <p className="flex items-center mb-3 "> MySql <span className="ml-2"><SiMysql/></span> </p>
            <p className="flex items-center mb-3 "> MongoDb <span className="ml-2"><SiMongodb/></span></p>
            <p className="flex items-center mb-3 "> Postgresql <span className="ml-2"><SiPostgresql/></span></p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Programming Languages</h4>
            <p className="flex items-center mb-3 "> JavaScript <span className="ml-2"> <SiJavascript/></span>  </p>
            <p className="flex items-center mb-3 "> Python <span className="ml-2"><SiPython/></span></p>
            <p className="flex items-center mb-3 "> C <span className="text-white ml-2"> <Image src={CImage} height={14} alt=""/> </span></p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Familier</h4>
            <p className="flex items-center mb-3 "> Redux <span className="ml-2"><SiRedux/></span> </p>
            <p className="flex items-center mb-3 "> AWS <span className="ml-2"><SiAmazonaws/></span></p>
            <p className="flex items-center mb-3 " > Material UI <span className="ml-2"><SiMui/></span></p>
          </div>
          <div>
            <h4 className="p-3 bg-[#2b106a] rounded mb-3">Also Knows</h4>
            <p className="flex items-center mb-3 "> React Query <span className="ml-2"><SiReactquery/></span></p>
            <p className="flex items-center mb-3 "> Prisma <span className="ml-2"><SiPrisma/></span></p>
            <p className="flex items-center mb-3 "> typeORM <span className="ml-2"><FiType/></span></p>
          </div>
        </div>
      </div>
    <div className="text-white">
    <h2 className="text-4xl font-bold flex items-center justify-center flex-row pt-10  space-x-5">
         Experience
        </h2>
        <div className="pt-10">
          <Experience/>
        </div>
    </div>
      {/* my work */}
      <div className="text-white">
        <h2 className="text-4xl font-bold flex items-center justify-center flex-row pt-10  space-x-5">
          My Work
        </h2>
        <div className=" grid grid-cols-4 place-items-center pt-10 pl-[400px] pr-[400px] gap-4">
          <WorkCard
            img={''}
            title={"ProductManagement"}
            description={"using knex-my sql-express js"}
            demo=""
            source_code={"https://github.com/limonPRO/ProductManagement"}
            frameworks={["node js", "react js","mySql" , "knexjs"]}
          />
          <WorkCard
            img={""}
            title={"MERN AUTH"}
            description={"MERN stack application with authentication"}
            demo=""
            source_code={"https://github.com/limonPRO/mern-auth"}
            frameworks={["node js", "react js" , "mongoose" , "JWT"]}
          />
           <WorkCard
            img={''}
            title={"Code Arena"}
            description={"it is a simple problem solving platform build with node js and react js"}
            demo=""
            source_code={"https://github.com/limonPRO/CodeArena"}
            frameworks={["node js", "react js"]}
          />
           <WorkCard
            img={''}
            title={"NestJS Todo APP rest api"}
            description={"backend todo rest api with jwt authentication"}
            demo=""
            source_code={"https://github.com/limonPRO/nestjs-todo-app-with-auth"}
            frameworks={["nest js", "prisma" , "postgresSql"]}
          />
           <WorkCard
            img={''}
            title={"REST API"}
            description={"create a simple rest api using express js , mysql and knex.js"}
            demo=""
            source_code={"https://github.com/limonPRO/restapi"}
            frameworks={["node js", "express js","mySql","knexjs"]}
          />
           <WorkCard
            img={''}
            title={"rest api"}
            description={"ressssssssssssssssssss"}
            demo="www.google.com"
            source_code={"www.github.com"}
            frameworks={["node js", "react js"]}
          />
        </div>
      </div>
      <div className="text-white">
      <h2 className="text-4xl font-bold flex items-center justify-center flex-row pt-10  space-x-5">
          Contact
        </h2>
        <Contact/>
      </div>
    </div>
  );
}
