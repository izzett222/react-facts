import Li from "./Li";
import bg from "../bg.svg";
export default function Content({dark}) {
  return (
    <div className={`${dark ? "bg-[#282D35] text-white" : "bg-white text-[#2B283A]"} transition-all duration-400 flex-1 pl-[27px] pt-16  relative`}>
      <div className="relative z-10">
        <h1 className="font-bold text-[40px] leading-[1.21]">
          Fun facts about React
        </h1>
        <ul className="flex flex-col gap-5 mt-12 ml-6">
          <Li>Was first released in 2013</Li>
          <Li>Was originally created by Jordan Walke</Li>
          <Li>Has well over 100K stars on GitHub</Li>
          <Li>Is maintained by Facebook</Li>
          <Li>Powers thousands of enterprise apps, including mobile apps</Li>
        </ul>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-[80%]">
        <img src={bg} alt="" className={`${dark ? "" : "opacity-20"} transition-all duration-400`} />
      </div>
    </div>
  );
}
