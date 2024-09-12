import Navbar from "@/components/navbar";


import { WorkPage } from "./(app)/(work)/page";
import HomePage from "./(app)/(home)/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="max-w-[1300px] m-auto">
        <Navbar />
        <HomePage />
        <Footer/>
      </div>
    </>
  );
}
