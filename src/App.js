import {
  About,
  Blogs,
  Destinations,
  Footer,
  Galleries,
  Header,
  Reviews,
  Services,
} from "./containers";
import { Banner, Credit } from "./components";

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Destinations />
      <Services />
      <Galleries />
      <Reviews />
      <Blogs />
      <Banner />
      <Footer />
      <Credit />
    </>
  );
};

export default App;
