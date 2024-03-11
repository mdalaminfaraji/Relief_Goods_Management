import Banner from "../../components/home/Banner/Banner";
import Footer from "../../components/home/Footer/Footer";
import ReliefGallery from "../../components/home/Gallery/ReliefGallery";
import CardComponent from "../../components/home/ReliefCards/CardComponent";
import ProviderTestimonials from "../../components/home/Testmonial/ProviderTestiminals";
import testimonialsData from "../../utils/testimonialsData.json";
const Home = () => {
  return (
    <div>
      <Banner />
      <CardComponent />
      <ProviderTestimonials testimonials={testimonialsData} />
      <ReliefGallery />
      <Footer />
    </div>
  );
};

export default Home;
