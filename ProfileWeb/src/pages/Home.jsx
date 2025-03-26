import React from "react";
import Kid from "../images/kid.jpg";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMailFilled,
} from "@tabler/icons-react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-cols-1 md:flex-row items-center gap-8 mx-0 md:mx-24 my-0 md:my-32 mt-32
          px-8 md:px-20 py-16"
    >
      <div className="space-y-2 md:space-y-4 ">
        <h2 className="text-2xl font-medium">Hello, It's me</h2>
        <h1 className="text-3xl md:text-6xl font-extrabold">Napat</h1>
        <h2 className="text-xl font-semibold">I'm an Artist</h2>
        <p className="text-gray-600">
          Please hold your breath as we dive into a world full of creativity
          with designer XXX.
        </p>
        <div className="flex items-center py-0 gap-4">
          <a
            href="javascript:;"
            class="p-2 rounded-lg flex items-center border-1 border-gray-800 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <IconBrandFacebook />
          </a>
          <a
            href="javascript:;"
            class="p-2 rounded-lg flex items-center border-1 border-gray-800 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="javascript:;"
            class="p-2 rounded-lg flex items-center border-1 border-gray-800 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <IconMailFilled />
          </a>
        </div>
        <div className="flex items-center">
          <button className="bg-indigo-800 hover:bg-indigo-900 text-center text-white px-6 py-2 rounded-full cursor-pointer font-medium">
            My Portfolio
          </button>
        </div>
      </div>
      <div className="flex jstify-center">
        <img src={Kid} alt="PROFILE1" className="w-72 md:w-96 object-cover" />
      </div>
    </section>
  );
}

export default Home;
