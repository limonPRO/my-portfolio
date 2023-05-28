
'use client';
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubjectChange = (e: any) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (e: any) => {
    setBody(e.target.value);
  };

  const sendEmail = () => {
    if(!subject||!body){
      toast.error("please enter credential", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else{
      const mailtoLink = `mailto:imlimonpro@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      toast.success("redirect to email ", {
        position: toast.POSITION.TOP_RIGHT
      });
      setBody("")
      setSubject("")
    }
   
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <div className=" flex flex-col space-x-2">
        <label htmlFor="subject" className="text-[#ffffff] font-bold mb-2">Subject:</label>
        <input
          className="bg-[#2b106a] border-2 border-grey-500 rounded h-10 w-[600px]"
          placeholder="Enter the subject"
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
          style={{
            color: "#100f0f",
            fontStyle: "italic",
            paddingLeft: "2px"
          }}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="body" className="text-[#ffffff] font-bold mb-2">
          Body:
        </label>
        <textarea
          className="bg-[#2b106a] border-2 border-grey-500 rounded h-[400px] w-[600px]"
          placeholder="enter your wishes"
          id="body"
          value={body}
          onChange={handleBodyChange}
          style={{
            color: "#100f0f",
            fontStyle: "italic",
            paddingTop: "4px",
            paddingLeft: "4px"
          }}
        />
      </div>
      <button className="h-[50px] w-[100px] bg-[#2b106a] rounded ml-[500px]" onClick={sendEmail}>Enter</button>
      <ToastContainer />
    </div>
  );
}