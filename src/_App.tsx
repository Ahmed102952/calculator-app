import React, { useEffect, useState } from "react";
import BtnsBox from "./components/BtnsBox";
import * as btns from "./components/Btns";
import calc from "./util/calc";
import DisplayScreen from "./components/DisplayScreen";
import Switch from "./components/DarkmodeToggle";
import Attr from "./components/attr";

export const App = () => {
  const [theme, setTheme] = useState("default");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if ("theme" in localStorage) {
      setTheme(localStorage.theme);
      return;
    }
    localStorage.setItem("theme", "default");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      return;
    }
    if (theme === "default") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
      return;
    }
    document.body.classList.remove("dark");
  }, [theme]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  };
  const deleteAll = () => {
    setInput("");
    setResult("");
  };
  const erase = () => {
    setInput(input.slice(0, -1));
  };
  const results = async () => {
    try {
      setInput(calc(input));
      setResult("");
    } catch (err) {
      setResult("syntax error");
    }
  };
  useEffect(() => {
    try {
      const res = calc(input);
      if (typeof res === "string") {
        res == ""? setResult("0") : setResult(res);
      }
    } catch (err) {
      setResult("");
    }
  }, [input]);
  const switchMode = () => {
    if(theme !== "dark") {
      setTheme("dark") 
      localStorage.theme = "dark"
      return
    }
    setTheme("light")
    localStorage.theme = "light"
  }

  return (
    <div className="bg-blue-50 dark:bg-gray-800 min-h-screen px-5 grid place-items-center transition-all duration-300 relative">
      <div className="max-w-[21rem] sm:max-h-[38.125rem] max-h-[38rem] w-full h-full px-7 pt-16 pb-6 bg-bg-light dark:bg-bg-dark bg-opacity-60 flex flex-col justify-between rounded-3xl relative bg-blend-multiply dark:bg-opacity-75 shadow-2xl shadow-blue-300 dark:shadow-black">
      <Attr />
        <button className="absolute top-5 right-7 rounded-full shadow-sm p-1 shadow-blue-50 dark:shadow-black" onClick={switchMode} >
        <Switch />
        </button>
        <DisplayScreen input={input} result={result} />
        <BtnsBox>
          <button onClick={deleteAll}>
            <btns.DeleteAll />
          </button>
          <button onClick={erase}>
            <btns.Erase />
          </button>
          <button value={"²"} onClick={clickHandler}>
            <btns.OpBtn value="x²" />
          </button>
          <button value={"^("} onClick={clickHandler}>
            <btns.OpBtn value="xʸ" />
          </button>
          <button value="(" onClick={clickHandler}>
            <btns.OpBtn value="(" />
          </button>
          <button value=")" onClick={clickHandler}>
            <btns.OpBtn value=")" />
          </button>
          <button value="^(1/2)" onClick={clickHandler}>
            <btns.OpBtn value="√" />
          </button>
          <button value="/" onClick={clickHandler}>
            <btns.OpBtn value="/" />
          </button>
          <div className="col-span-3 row-span-3 grid grid-cols-3 gap-4 sm:gap-2">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((n) => {
              return (
                <button value={n} onClick={clickHandler} key={n}>
                  <btns.NumberBtn number={n} />
                </button>
              );
            })}
          </div>
          <button value="*" onClick={clickHandler}>
            <btns.OpBtn value="*" />
          </button>
          <button value="-" onClick={clickHandler}>
            <btns.OpBtn value="-" />
          </button>
          <button value="+" onClick={clickHandler}>
            <btns.OpBtn value="+" />
          </button>
          <button value="(-)" onClick={clickHandler}>
            <btns.NumberBtn number="±" />
          </button>
          <button value="0" onClick={clickHandler}>
            <btns.NumberBtn number="0" />
          </button>
          <button value="." onClick={clickHandler}>
            <btns.NumberBtn number="." />
          </button>
          <button value="=" onClick={results}>
            <btns.Equal value="=" />
          </button>
        </BtnsBox>
      </div>
    </div>
  );
};
