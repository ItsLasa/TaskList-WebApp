import Image from "next/image";
import Head from "./Components/Head";
import AddTaskBar from "./Components/AddTaskBar";
import DropDownMenu from "./Components/DropDownMenu";
import ContextProvider from './ContextApi'
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
   <div className="flex items-center justify-center w-full h-svh ">
    <ContextProvider>
       <Head/>
       <DropDownMenu/>
       </ContextProvider>
     
       
       <Toaster/>
   </div>
  );
}
