import ButtonDownload from "./components/ButtonDownload";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import video from "./img/video.jpg";
function App() {
  return (
    <div className="font-openSans relative selection:bg-[#CCFAF1] ">
      <NavBar />
      <div className="pt-36 pb-16 ">
        <div className=" text-center">
          <h3 className="text-[2.8rem] sm:text-5xl md:text-6xl font-bold">
            Lobe <span className="text-[#04DDB2]">Tour</span>
          </h3>
          <p className="max-w-sm  mx-auto pt-4 font-light sm:text-xl sm:max-w-md lg:text-2xl lg:max-w-xl">
            Build your first machine learning model in ten minutes. No code or
            experience required.
          </p>
        </div>
        <div className="mt-14 md:mt-20 rounded-2xl px-8 ">
          <img
            src={video}
            alt="video"
            className="bg-cover bg-no-repeat md:w-[70%] transition duration-500 mx-auto rounded-xl  hover:shadow-2xl cursor-pointer"
          />
        </div>
        <div className=" font-bold text-center my-16 px-8">
          <p className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2">
            Train your app <span>with Lobe</span>
          </p>
          <ButtonDownload className="text-center mt-8 md:mt-12 " />
          <hr className=" mt-24" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
