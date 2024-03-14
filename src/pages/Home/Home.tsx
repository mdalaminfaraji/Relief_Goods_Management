import WhatWeDoSection from "../../components/home/About/WhatWeDo";
import Banner from "../../components/home/Banner/Banner";
import DistributionCenterLocation from "../../components/home/DistributionLocation/DistributionCenterLocation";

import FrequentlyAskedQuestions from "../../components/home/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
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
      <WhatWeDoSection />
      <FrequentlyAskedQuestions />
      <DistributionCenterLocation />
    </div>
  );
};

export default Home;
