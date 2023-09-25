//Hero section, what props are needed yet to be decided
interface IPROPS {
  title: string;
  subtitle: string;
  title_highlight: string;
}
export default function HeroSection(props: IPROPS) {
  return (
    //
    <div className="bg-white mx-auto flex max-w-[1280px] flex-col items-center justify-center md:my-0 md:flex-row ">
      <img
        className="relative w-full h-auto"
        src="/hero_background.png"
        alt=""
      />
      <div className="absolute gap-y-6 text-white flex flex-col justify-center items-center">
        <h1 className="text-6xl">{props.title} </h1>
        <h1 className="text-6xl text-[#FCD34D]">{props.title_highlight}</h1>
        <p className="text-xl">{props.subtitle}</p>
        <div className="flex justify-center items-center w-full">
          <input
            className="border focus:outline-none text-center w-1/3 py-2 px-3 rounded-md text-black"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#059669] ml-2 px-5 py-2 text-white rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
