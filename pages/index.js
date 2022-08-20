import Head from "next/head";
import Navbar from "../layout/Navbar/Navbar";
import Header from "../components/Header/Header";
import ModelY from "../components/ModelY/ModelY";
import ModelS from "../components/ModelS/ModelS";
import ModelX from "../components/ModelX/ModelX";
import SolarPanels from "../components/SolarPanel/SolarPanel";
import SolarRoof from "../components/SolarRoof/SolarRoof";
import Accessories from "../components/Accessories/Accessories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla clone</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Header />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanels />
      <SolarRoof />
      <Accessories />
    </>
  );
}
