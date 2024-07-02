import Image from "next/image";
import NavBar from "./_components/NavBar";
import Welcome from "./_components/Welcome";
import FeaturesList from "./_components/Features";
import Services from "./_components/Services";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 my-1 ">
    <NavBar/>
    <Welcome/>
    <FeaturesList/>
    <Services/>
    <Footer/>
    </main>
  );
}
