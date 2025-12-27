import Navbar from "./Components/NavBar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Hero from "./Components/Hero/Hero";
import CategoryTab from "./Components/CategoryTab/CategoryTab";
import CardSection from "./Components/CardSection/CardSection";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <SearchBar />
      <Hero />
      <CategoryTab />
      <CardSection />
    </div>
  );
};

export default Home;
