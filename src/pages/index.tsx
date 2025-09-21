import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Login from './components/Login.tsx'
import {useState} from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets:["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//fim de definicao das fontes

export default function Home() {
 const [value, setValue]=useState("");
  return (
     <div className=" min-h-screen ">
   
      <main className="border p-2 rounded-[10] ml-auto mr-auto mt-[70]   h-[600px] w-[450px] flex flex-col row-start-2 text-center items-center ">

     <h1 className="pt-[30px] font-bold">GPay</h1>
     <input 
     type="text" 
     placeholder="Email"
     value={value}
     onChange= {(e)=>setValue(e.target.value)}
     className="border p-2 rounded w-[350px] mt-[60]"
     />
     <a href="#" className="text-[#1161ca] text-start font-semibold">Forget Email?</a>
     <button className="bg-[#1161ca] text-white-600  mt-[40] cursor-pointer p-2 rounded-[30px] w-[350px]">Next</button>
      <hr className="my-4 border-red-800" />
      <button className="border-[3px] cursor-pointer p-2 rounded-[30px] w-[350px]">Sign Up</button>
     </main>
    <ul className="flex mt-[40] justify-center align-center text-center ">
      <li className="p-[4]">Contact Us</li>
      <li className="p-[4]">Privacy</li>
     <li className="p-[4]"> Legal</li>
      <li className="p-[4]">PoliceUpdate</li>
      <li className="p-[4]">Worldwide</li>
      </ul>
    </div>
  );
}
