import { FaFacebookSquare, FaGithubSquare, FaLinkedin ,FaInstagramSquare } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="flex justify-around h-[100px] w-full bg-[#2b106a] mt-20">
            <div className="flex items-center justify-center">
                <p className="text-white font-semibold text-2xl"> ©copyright - 2023 Limon Shah</p>
            </div>
            <div className="flex items-center justify-center flex-row">
                <a  className="" href="http://"><FaFacebookSquare size={30} color="white"/></a>
                <a href="https://www.linkedin.com/in/md-limon-shah-797637159/"><FaLinkedin size={30} color="white"/></a>
                <a href="https://github.com/limonPRO"><FaGithubSquare size={30} color="white"/></a>
                <a href=""><FaInstagramSquare size={30} color="white"/></a>
            </div>
        </div>
    )
}