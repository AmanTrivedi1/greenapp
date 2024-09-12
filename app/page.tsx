import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import HomePage from "./webapp/home/page";

export default function Home() {
  return (
    <>
      <div className="max-w-[1300px] m-auto">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
