import PulseText from "react-pulse-text";
const Home = () => {
  const downloadPDF = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/190wta8pKEYFjuAeNzmEZuTWDD0m1ArbO/view?usp=sharing";

    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "MD MAHFUZ HOSSAIN RESUME.pdf";
    a.click();

    // Clean up the anchor element
    document.body.removeChild(a);
  };

  return (
    <div className="lg:h-screen lg:pt-28 bg-[#1F1F1F]" id="home">
      <div className="text-white flex flex-col lg:flex-row justify-between items-center mx-5 py-10 lg:py-0 lg:mx-24 relative">
        <div
          data-aos="fade-up-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="space-y-5 aos-init aos-animate"
        >
          <PulseText
            text="Hi, I am"
            duration={6000}
            iterationCount={99999}
            reverse
          >
            <h1> Hi, I am</h1>
          </PulseText>
          <h4 className="text-2xl">
            <span className="text-[#f3004b] font-bold"> MD Mahfuz Hossain</span>
          </h4>
          <h2 className="text-4xl lg:text-6xl">
            MERN STACK <br />
            <span className="text-[#f3004b]">Web Developer</span>
          </h2>
          <p className="text-xl">
            Building beautiful websites with skillful developer.
          </p>
          <div className=" 5lg:space-x-4 space-y-8">
            <a
              href="#about"
              className="relative px-12 mr-4 py-2 font-medium text-white group mt-3"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">About Me</span>
            </a>

            <button onClick={downloadPDF} className="mt-5">
              <a
                href="#_"
                className="relative px-8  py-2 font-medium text-white group mt-8"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                <span className="relative">Download Resume </span>
              </a>
            </button>
          </div>
        </div>
        <div className=" mt-10 lg:mt-0">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] aos-init aos-animate"
          >
            <div className="w-full h-full bg-[#f3004b] rounded-full after:content-[''] after:absolute after:w-[270px] after:h-[270px]  lg:after:w-[360px] lg:after:h-[360px] after:bg-[#1F1F1F] after:rounded-full  flex justify-center items-center relative zoomIn-animation">
              <span className="absolute w-full h-full rounded-full bg-[#f3004b] blur-md"></span>
              <div className="z-10 w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden relative">
                <img
                  src="https://i.ibb.co/gF6vpB1/20221213-152946.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
