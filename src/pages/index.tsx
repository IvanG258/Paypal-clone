import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Login from './components/Login.tsx'
import {useState} from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//fim de definicao das fontes

export default function Home() {
 const [value, setValue]=useState("");
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     <h1>PayPal</h1>
     <input 
     type="text" 
     placeholder="Email"
     value={valor}
     onChange={(e)=>setValue(e.target.value)}
     className="border p-2 rounded"
     />

     </main>
    
    </div>
  );
}
