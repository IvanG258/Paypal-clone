
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
  const English="English"
const Spanish="Spanish"
const Deutsch="Deutsch"
const Francais="Francais";
 const [value, setValue]=useState("");
  return (
     <div className=" ">
   
      <main className="border border-gray-500 p-2 rounded-[10] ml-auto mr-auto mt-[100]   h-[600] w-[450] flex flex-col  items-center ">

     <h1 className="pt-[30px] text-center font-bold">GPay</h1>
     <form>
      <input 
     type="text" 
     autoComplete="email"
     placeholder="Email or username"
     value={value}
     onChange= {(e)=>setValue(e.target.value)}
     className="border focus:border-[#1161ca] placeholder:text-sm focus:outline-[#1161ca] placeholder:font-semibold p-2 rounded w-[350] h-[65] mt-[60]"
     />
     <a href="#" className="mt-[10] text-[#1161ca] ml-[50] self-start font-semibold">Forget Email?</a>
     <button className="bg-[#1161ca] text-white font-semibold  h-[50] mt-[40] cursor-pointer p-2 rounded-[30px] w-[350px]">Next</button>
        <div className="mt-[20] mb-[20] flex items-center">
        <hr className="flex-1 w-[150] border-gray-400" />
        <span className="mx-4 text-gray-600">or</span>
        <hr className="flex-1 w-[150] border-gray-400" />
      </div>
      <button className="border-[3px] cursor-pointer font-semibold h-[50] p-2 rounded-[30px] w-[350px] hover:border-[#1161ca] hover:text-[#1161ca]">Sign Up</button>
    
    <ul className="flex mt-[90] justify-center text-sm items-center text-center">
      <li className="px-[7]"><select className="border-none"><option>US</option></select></li>
      <li className="px-[7] ">{English}</li>
     <li className="px-[7] border-l-[2]  border-gray-400 "> {Spanish}</li>
      <li className="px-[7] border-l-[2]  border-gray-400 ">{Francais}</li>
      <li className="px-[7] border-l-[2]  border-gray-400 ">{Deutsch}</li>
      </ul>
      </form>
     
     </main>

    <ul className="flex mt-[40] justify-center align-center font-semibold text-sm text-center ">
      <li className="p-[4]">Contact Us</li>
      <li className="p-[4]">Privacy</li>
     <li className="p-[4]"> Legal</li>
      <li className="p-[4]">PoliceUpdate</li>
      <li className="p-[4]">Worldwide</li>
      </ul>
    
    </div>
  );
}
