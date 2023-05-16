import Carousel from "./Carousel";
import Flashsale from "./Flashsale";
import Prides from "./Prides";
import SociollaExclusive from "./SociollaExclusive";
import Stepper from "./Stepper";
import ValuePack from "./ValuePack";

import EmailSubscription from "./banners/EmailSubscription";
import LessWasteBanner from "./banners/LessWaste";
import Sociolla from "./banners/Sociolla";

import { useQuery } from "@tanstack/react-query";

import fetchDataHomepage from "../../containers/fetchDataHomePage";

const Homepage = () => {
  const { data, isLoading, error } = useQuery(
    ["homepage", null],
    fetchDataHomepage
  );
  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  return (
    <main className="pt-20 text-sm">
      <Carousel />
      <LessWasteBanner />
      <Flashsale />
      <SociollaExclusive />
      <ValuePack />
      <Stepper newProducts={data.newProducts} bestieDeals={data.bestieDeals} />
      <Prides />
      <EmailSubscription />
      <Sociolla />
    </main>
  );
};

export default Homepage;
