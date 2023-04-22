"use client";
import { useState } from "react";
import axios from "axios";
type Data = {
  temp?: number;
  name?: string;
  country?: string;
};
export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data>({});
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.NEXT_PUBLIC_API}&units=metric`;
  // fetch data function
  function getData<MouseEventHandler>() {
    axios
      .request({
        url: url,
      })
      .then((response) => {
        const { temp } = response.data.main;
        const name = response.data.name;
        const { country } = response.data.sys;
        setData({
          name: name,
          temp: Math.round(temp),
          country: country,
        });
      })
      .catch((error) => {
        error.response.status == 404
          ? window.alert("Sorry can't find this place, please try again!")
          : null;
      });
  }
  return (
    <main className=" h-screen w-screen">
      <div className="flex flex-col p-4 mb-6 sm:flex-row w-full justify-center items-center gap-5">
        <label htmlFor="location" className="font-semibold text-lg">
          Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="write the location here..."
          id="location"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className=" bg-transparent border-2 border-gray-900 px-3 py-2 rounded-xl placeholder:font-semibold"
          onKeyDown={(e) => {
            e.keyCode == 13 ? getData() : null;
          }}
        />
      </div>
      <div className=" text-center">
        <h1 className=" text-4xl font-bold mb-4 dark:text-w">{data.country}</h1>
        <h2 className=" text-3xl mb-4">{data.name}</h2>
        {data.temp == undefined ? null : (
          <h3 className=" text-2xl">{data.temp}&#8451;</h3>
        )}
      </div>
    </main>
  );
}
