import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Home = () => {
  let isLogged = localStorage.getItem("user");
  if (!isLogged) {
    window.location.href = "/login";
  }

  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default Home;
