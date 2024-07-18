import Hero from "./layouts/Hero";
import PreLoader from "./layouts/PreLoader/PreLoader";
import Products from "./layouts/Products";
import Footer from "./layouts/Footer";
import Nav from "./common/components/Nav";
import Providers from "./contexts/Providers";

function App() {
  return (
    <>
      <Providers>
        <PreLoader />
        <main>
          <Nav menuOption="Management" link="management" />
          <Hero />
          <Products />
          <Footer />
        </main>
      </Providers>
    </>
  );
}

export default App;
