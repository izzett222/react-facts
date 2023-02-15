import logo from "./logo.svg";
import bg from "./bg.svg";

function Li({children}) {
  return <li className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-[#61DAFB] inline-block mr-3"></span>{children}</li>
}
function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex bg-[#21222A] items-center py-[31px] px-[26px] text-white justify-between">
        <div className="flex items-center">
          <img alt="" src={logo} className="w-[40px] h-[40px]" />
          <p className="text-[#61DAFB] text-[22px]">ReactFacts</p>
        </div>
        <p>React Course - Project 1</p>
      </div>
      <div className="bg-[#282D35] flex-1 pl-[27px] pt-16 text-white relative">
        <div className="relative z-10">
          <h1 className="font-bold text-[40px] leading-[1.21]">Fun facts about React</h1>
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
    </div>
  );
}

export default App;
