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
     <div className="flex  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   
      <main className="border p-2 rounded  h-[600px] w-[450px] flex flex-col row-start-2 text-center items-center ">

     <h1 className="pt-[30px] font-bold">GPay</h1>
     <input 
     type="text" 
     placeholder="Email"
     value={value}
     onChange= {(e)=>setValue(e.target.value)}
     className="border p-2 rounded w-[350px] mt-[60]"
     />
     <a className="color-blue ">Forget Emaiil?</a>
     <button className="bg-blue-600  mt-[40] cursor-pointer p-2 rounded-[30px] w-[350px]">Next</button>
      <hr className="my-4 border-red-800" />
      <button className="border-[3px] cursor-pointer p-2 rounded-[30px] w-[350px]">Sign Up</button>
     </main>
    
    </div>
  );
}
