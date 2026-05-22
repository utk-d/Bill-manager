import AboutAppCard from "./components/AboutAppCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex items-center gap-10 flex-col min-h-screen">
      <Navbar />
      <AboutAppCard />
    </div>
  );
}
