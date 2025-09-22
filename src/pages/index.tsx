
import { Geist, Geist_Mono } from "next/font/google";
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
     <div className=" ">
   
      <main className="border border-gray-500 p-2 rounded-[10] ml-auto mr-auto mt-[100]   h-[600] w-[450] flex flex-col row-start-2 text-center items-center ">

     <h1 className="pt-[30px] font-bold">GPay</h1>
     <input 
     type="text" 
     placeholder="Email or username"
     value={value}
     onChange= {(e)=>setValue(e.target.value)}
     className="border p-2 rounded w-[350] h-[60] mt-[60]"
     />
     <a href="#" className="text-[#1161ca] text-start font-semibold">Forget Email?</a>
     <button className="bg-[#1161ca] text-white font-semibold  h-[50] mt-[40] cursor-pointer p-2 rounded-[30px] w-[350px]">Next</button>
        <div className="mt-[20] mb-[20] flex items-center">
        <hr className="flex-1 w-[150] border-gray-400" />
        <span className="mx-4 text-gray-600">or</span>
        <hr className="flex-1 w-[150] border-gray-400" />
      </div>
      <button className="border-[3px] cursor-pointer h-[50] p-2 rounded-[30px] w-[350px] hover:border-[#1161ca] hover:text-[#1161ca]">Sign Up</button>
    
    <ul className="flex mt-[120] justify-center align-center text-center ">
      <li className="p-[4]"><select><option>US</option></select></li>
      <li className="p-[4] border-left-gray-400">English</li>
     <li className="p-[4] border-left-gray-400"> Spanish</li>
      <li className="p-[4] border-left-gray-400">Francais</li>
      <li className="p-[4] border-left-gray-400">Deutsch</li>
      </ul>
    
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
