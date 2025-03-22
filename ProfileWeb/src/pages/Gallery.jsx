import React from 'react'
import myImg1 from "../images/IMG0294.jpg";
import myImg2 from "../images/IMG0295.jpg";
import myImg3 from "../images/IMG0296.jpg";
import myImg4 from "../images/IMG0297.jpg";
import myImg5 from "../images/image1.jpg";
import myImg6 from "../images/image2.jpg";

function gallery() {
  return (
    <section 
      id="gallery" 
      className="flex  flex-col justify-center items-center px-4 py-0 md:py-16">
      <h2 className="text-3xl font-bold md:text-5xl my-12">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 mt-8">
        <img src={myImg1} alt="pic 1" className="rounded-4xl transition-transform duration-300 hover:scale-105 " />
        <img src={myImg2} alt="pic 2" className="rounded-4xl transition-transform duration-300 hover:scale-105 "/>
        <img src={myImg3} alt="pic 3" className="rounded-4xl transition-transform duration-300 hover:scale-105 "/>
        <img src={myImg4} alt="pic 4" className="rounded-4xl transition-transform duration-300 hover:scale-105 "/>
        <img src={myImg5} alt="pic 5" className="rounded-4xl transition-transform duration-300 hover:scale-105 "/> 
        <img src={myImg6} alt="pic 6" className="rounded-4xl transition-transform duration-300 hover:scale-105 "/>
      </div>
    </section>
  )
}

export default gallery