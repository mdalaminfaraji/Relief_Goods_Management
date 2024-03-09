import Banner from "../../components/home/Banner/Banner";
import CardComponent from "../../components/home/ReliefCards/CardComponent";
import ProviderTestimonials from "../../components/home/Testmonial/ProviderTestiminals";
import testimonialsData from "../../utils/testimonialsData.json";
const Home = () => {
  return (
    <div>
      <Banner />
      <CardComponent />
      <ProviderTestimonials testimonials={testimonialsData} />
    </div>
  );
};

export default Home;
