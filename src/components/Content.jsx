import Li from "./Li";
import bg from "../bg.svg";
export default function Content() {
  return (
    <div className="bg-[#282D35] flex-1 pl-[27px] pt-16 text-white relative">
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
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}
