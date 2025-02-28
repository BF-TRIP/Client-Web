import HomeHeader from "../components/home-header/home-header";
import RecommendationSection from "../components/recommendation-section/recommendation-section";
import NearbySection from "../components/nearby-section/nearby-section";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <RecommendationSection />
      <NearbySection />
    </>
  );
};

export default HomePage;
