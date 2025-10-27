import { FaRegCheckCircle, FaStar } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import "./home.css"
import { FiUser } from "react-icons/fi";
import { MdNetworkCheck, MdOutlineSpeed } from "react-icons/md";
import { LuTimer } from "react-icons/lu";
import { AiOutlineAim } from "react-icons/ai";
import getTestimonials from "../../api/testimonial";
export const Home = () => {
  return (
    <>
    <Intro />
    <Features />
    <Testimonial />
    </>
    
  );
};


const Intro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4 py-[7rem]">
      {/* Tagline */}
      <div className="mb-6  ">
        <span className="flex items-center gap-4 px-4 py-2 rounded-full bg-[#121212] text-[#00dce8] border border-[#242424] font-semibold tracking-wide text-xs shadow-md"> <FaStar/>FASTER, SMOOTHER, SHARPER</span>
      </div>
      {/* Main Heading */}
      <h1 className="text-7xl md:text-6xl font-extrabold text-center mb-2">
        Optimize <span className="text-[#00dce8]">your PC</span> for
      </h1>
      <h2 className="text-7xl md:text-6xl font-extrabold text-center mb-6 ">Gaming</h2>
      {/* Description */}
      <p className="max-w-[879px] text-center text-2xl text-[#a3aab1] mb-8 ">
    RisxnTweaks removes bloatware and optimizes your PC for higher FPS, lower input delay, and reduced ping. Get smoother gameplay and precision hit registration tweaks for competitive shooters.
    <span style={{ lineHeight: 1.7 }}></span>
      </p>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <button className="hero-btn bg-[#00dce8] text-[#181818] font-semibold px-5 py-3 rounded-[12px] shadow-lg hover:bg-[#00b6c2] transition-colors flex items-center gap-2">
          <span className="flex gap-4  items-center"><IoIosSearch /> Explore Services</span>
        </button>
        <button className="secondary-btn bg-[#181818] border border-[#343434] text-white font-semibold px-8 py-3 rounded-[12px] hover:bg-[#232323] hover:border-[#00c0cb] transition-colors flex items-center gap-2">
          <span className="flex gap-4 items-center"><BsDownload /> Try For Free</span>
        </button>
      </div>
      {/* Features */}
      <div className="flex flex-col md:flex-row items-center  justify-center gap-4 mb-8 text-[#9fa5ad] text-sm font-bold">
        <span className="text-[#00dce8]">•</span>
        <span className="flex items-center gap-2 "> No Risk <span className="mx-1">•</span>  Free to Test</span>
        <span className="text-[#00dce8]">•</span>
        <span className="flex items-center gap-2">Discord Support 24/7</span>
        

      </div>
      {/* Stats */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
        <div className="button bg-[#121212] rounded-[16px] px-4.5 py-3 flex gap-4 items-center shadow-md border border-[#343434] hover:bg-transparent">         <button className="border  p-2 rounded-md hover:bg-[transparent] border-[#00c0cb] text-[#00c0cb] navigation-shadow transition-colors">
              <FiUser />
            </button>
          <div className="flex flex-col items-center text-[14px]">
          <span className=" font-bold">10,000+</span>
          <span className="text-[#b3b3b3]">Customers</span>
          </div>

        </div>
        <div className="button bg-[#121212] rounded-[16px] px-4.5 gap-4 py-3 flex  items-center shadow-md border border-[#343434] hover:bg-transparent">
 <button className="border  p-2 rounded-md hover:bg-[transparent] border-[#00c0cb] text-[#00c0cb] navigation-shadow transition-colors">
              <FaRegCheckCircle />
            </button>
          <div className="flex flex-col items-center  text-[14px]">
            <span className=" font-bold">50,000+</span>
          <span className="text-[#b3b3b3]">Users</span>
</div>
        </div>
      </div>
    </div>
  )};


  const Features = () => {
    return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4  ">
             <h1 className="text-5xl md:text-5xl font-extrabold text-center mb-2">
        Why <span className="text-[#00dce8]">Choose Us</span>
      </h1>
      {/* Description */}
      <p className="max-w-[879px] text-center text-2xl text-[#a3aab1] mb-8 ">
Experience the difference with our advanced PC optimization technology
    <span style={{ lineHeight: 1.7 }}></span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
          {/* Card 1 */}
          <div className="card bg-[#121212] rounded-xl p-6 flex flex-col items-center shadow-lg border border-[#232323] hover:border-[#0d5155]">
            <div className="img mb-4 bg-[#0f2326] rounded-[16px] p-3 border border-[#0d5155]"><span role="img" aria-label="speed" className="text-[#00dce8] text-3xl"><MdOutlineSpeed /></span></div>
            <h3 className="font-bold text-xl mb-2 text-white">Increase FPS</h3>
            <p className="text-[#b3b3b3] text-center">Raise frame rates with targeted OS, driver, and game tuning.</p>
          </div>
          {/* Card 2 */}
          <div className="card bg-[#121212] rounded-xl p-6 flex flex-col items-center shadow-lg border border-[#232323] hover:border-[#0d5155]">
            <div className="img mb-4 bg-[#0f2326] rounded-[16px] p-3  border border-[#0d5155]"><span role="img" aria-label="ping" className="text-[#00dce8] text-3xl"><MdNetworkCheck /></span></div>
            <h3 className="font-bold text-xl mb-2 text-white">Decrease Ping</h3>
            <p className="text-[#b3b3b3] text-center">Lower network delay with smart routing, DNS, and QoS rules.</p>
          </div>
          {/* Card 3 */}
          <div className="card bg-[#121212] rounded-xl p-6 flex flex-col items-center shadow-lg border border-[#232323] hover:border-[#0d5155]">
            <div className="img  mb-4 bg-[#0f2326] rounded-[16px] p-3  border border-[#0d5155]"><span role="img" aria-label="latency" className="text-[#00dce8] text-3xl"><LuTimer />
</span></div>
            <h3 className="font-bold text-xl mb-2 text-white">Reduce Latency</h3>
            <p className="text-[#b3b3b3] text-center">Cut input lag by refining timers, buffers, and scheduling.</p>
          </div>
          {/* Card 4 */}
          <div className="card bg-[#121212] rounded-xl p-6 flex flex-col items-center shadow-lg border border-[#232323] hover:border-[#0d5155]">
            <div className="img mb-4 bg-[#0f2326] rounded-[16px] p-3  border border-[#0d5155]"><span role="img" aria-label="aim" className="text-[#00dce8] text-3xl"><AiOutlineAim /></span></div>
            <h3 className="font-bold text-xl mb-2 text-white">Boost Aim</h3>
            <p className="text-[#b3b3b3] text-center">Sharpen precision with steadier frames and input consistency.</p>
          </div>
        </div>
      </div>
    )};

    const Testimonial = () => {
      return (
                  <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4  ">
                        <h1 className="text-5xl md:text-5xl font-extrabold text-center mb-2">
        Trusted by  <span className="text-[#00dce8]">The Best</span>
      </h1>
      <p className="max-w-[879px] text-center text-2xl text-[#a3aab1] mb-8 ">
Chosen by elite players and creators for peak performance.
    <span style={{ lineHeight: 1.7 }}></span>
      </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl">
          {getTestimonials.map((testimonial) => {
            const { id, name, role, profilePictureUrl } = testimonial;
            return (
              <div key={id} className="testimonial-item flex flex-col items-center">
                <img src={profilePictureUrl} alt={`${name}'s profile`} className="w-40 h-40 rounded-full mb-2" />
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-[#00dce8]">{role}</p>
              </div>
            );
          })}
        </div>
      </div>
      )
    };


