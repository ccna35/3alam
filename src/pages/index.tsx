import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";

import Layout from "../components/layout";
import Effect from "../components/Effect";
import Numbers from "../components/Numbers";
import Investors from "../components/Investors";
import News from "../components/News";
import Creative from "../components/Creative";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loading />;

  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Products />
      <Effect />
      <Numbers />
      <Investors />
      <News />
      <Creative />
    </Layout>
  );
};

export default HomePage;
