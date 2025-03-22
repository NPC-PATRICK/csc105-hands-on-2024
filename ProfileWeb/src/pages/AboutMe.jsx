import React from 'react'
import Yellow from "../images/otta.jpg"

const AboutMe = () =>{
  return (
    <>
        <section 
          id="about"
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-0 md:mx-24 my-0 md:my-16
          px-8 md:px-20 py-16">
          <img src={Yellow} alt="PROFILE2" className="object-cover"></img>
          <div className="space-y-2 md:space-y-4 mb-8">
            <h1 className="text-3xl md:text-6xl font-bold">About Me</h1>
            <h2 className="text-xl font-semibold">Artist & Designer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. In gravida, arcu ac luctus bibendum, et aliquet purus euismod. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque at hendrerit eros, nec luctus nibh. 
              In elemntum odio at lacus interdum mattis. 
              Cras placerat tortor egastas tortor sollicitudin viverra.
              Suspendisse molestie lectus ac turpis valputate,
              nec auctor purus.
            </p> 
            <button className="bg-indigo-800 hover:bg-indigo-900 text-white text-center px-6 py-2 rounded-full
            transition cursor-pointer mt-2" type="button">
              Read More
            </button>
          </div>
        </section>
    </>
  );
};

export default AboutMe