// eslint-disable-next-line no-unused-vars
import * as te from "tw-elements";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product/Details";
import FooterBanner from "./components/home/banners/FooterBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./components/home/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="font-lato">
          <Header />
          <Routes>
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
          <FooterBanner />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
