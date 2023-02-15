import logo from "../logo.svg";
export default function Header() {
  return (
    <div className="flex bg-[#21222A] items-center py-[31px] px-[26px] text-white justify-between">
      <div className="flex items-center">
        <img alt="" src={logo} className="w-[40px] h-[40px]" />
        <p className="text-[#61DAFB] text-[22px]">ReactFacts</p>
      </div>
      <p>React Course - Project 1</p>
    </div>
  );
}
