import Estates from "../Components/Estates";

import AboutCompany from "../Components/AboutCompany";

const Home = () => {
  const token = localStorage.getItem("token")
  return (
    <div>
      <Estates />
      {!token && <AboutCompany />}
    </div>
  );
};

export default Home;
