
const About = () => {
  return (
    <div className="py-10 bg-[#171717] text-white" id="about">
      <h2 className="text-4xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full  ">
        About Me
      </h2>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col gap-8 lg:flex-row items-center justify-between lg:mx-16 mx-5 my-20 aos-init aos-animate space-x-6"
      >
        <div className="lg:w-[35%]">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] aos-init aos-animate"
          >
            <div className="w-full h-full bg-[#f3004b] rounded-full after:content-[''] after:absolute after:w-[270px] after:h-[270px]  lg:after:w-[360px] lg:after:h-[360px] after:bg-[#1F1F1F] after:rounded-full  flex justify-center items-center relative zoomIn-animation">
              <span className="absolute w-full h-full rounded-full bg-[#f3004b] blur-md"></span>
              <div className="z-10 w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden relative">
                <img src='https://i.ibb.co/kxFGK3g/profile.png' className="w-[250px] lg:w-full mt-5 ml-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-50%">
          <p className="lg:text-lg text-justify leading-7">
            My name is Mahfuz Hossain, I am junior MERN Stack web developer. I am from Pabna, Dhaka,
            Bangladesh. Currently I am completing undergraduate . I am passionate about web development and
            want to create user-friendly websites and applications. I am always
            try to explore new technologies to further enhance my skills and
            contribute to the field of web development.As a passionate
            developer, I believe in hard work.  I learn a lot of technology in that
            time . Also, I continuously seek out
            opportunities to enhance my skills and stay up-to-date with the
            latest trends in web development. Now I am seeking an opportunity to
            start my professional development career.
            <br />
            <div className="text-end mt-5">
              <span className="text-2xl text-[#f3004b] font-bold my-5">
                My Skills
              </span>
              <br />
              HTML | CSS | Bootstrap | Tailwind Css | Chakra.ui | JavaScript | React | ReactRouter | Redux | React-Redux  <br />
              Node. Js | Express. Js |MongoDB | Mongoose | Socket.io | REST Api <br />
              GitHub | Git | Git-Brush | Netlify | Vercel | Render | Figma | VsCode | Firebase 
            </div>
          </p>
          <button className="lg:px-5 lg:py-2 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
            <a href="https://drive.google.com/file/d/190wta8pKEYFjuAeNzmEZuTWDD0m1ArbO/view?usp=sharing">
              view Resume 
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
