import Image from "next/image";
import Head from "./Components/Head";
import AddTaskBar from "./Components/AddTaskBar";
import DropDownMenu from "./Components/DropDownMenu";
import ContextProvider from './ContextApi'
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
   <div className="flex w-full h-svh justify-center items-center">
    <ContextProvider>
       <Head/>
       </ContextProvider>
       <DropDownMenu/>
       
       <Toaster/>
   </div>
  );
}
