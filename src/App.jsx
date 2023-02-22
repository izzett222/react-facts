import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [dark, setDark] = useState(false);
  function handleDark() {
    setDark(!dark);
  }
  return (
    <div className="flex flex-col h-screen">
      <Header dark={dark} changeTheme={handleDark} />
      <Content dark={dark} />
    </div>
  );
}

export default App;
