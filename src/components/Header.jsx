import logo from "../logo.svg";
export default function Header({dark, changeTheme}) {
  return (
    <div className={`flex ${dark ? "bg-[#21222A]": "bg-white shadow-md"} relative z-10 transition-all duration-400  items-center py-[31px] px-[26px] text-white justify-between`}>
      <div className="flex items-center">
        <img alt="" src={logo} className="w-[40px] h-[40px]" />
        <p className={`${dark ? "text-[#61DAFB]": "text-[#00ABCA] font-medium"} transition-all duration-400 text-[22px]`}>ReactFacts</p>
      </div>
      <div className="flex items-center gap-2">
        <p className={`${dark ? "text-[#918E9B]": "text-[#2B283A]"} font-medium`}>Light</p>
        <div className={`w-9 h-[17px] flex items-center px-0.5 rounded-[2rem] ${!dark ? "bg-[#2B283A]" : "bg-[#F5F5F5]"} `}  onClick={changeTheme}>
          <div className={` ${!dark ? "bg-white" : "bg-[#222222]"} w-3 h-3 transition-transform duration-400 ${dark ? "translate-x-[21px]" : ""} rounded-full`}></div>
        </div>
        <p className={`${dark ? "text-white": "text-[#D5D4D8]"} font-medium transition-colors duration-400`}>Dark</p>
      </div>
    </div>
  );
}
