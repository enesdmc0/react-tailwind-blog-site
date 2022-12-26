import React from 'react';
import aboutImg from "../assets/about.png"
const About = () => {
    const info = [
        {text : "Years experience" , count : "04"},
        {text : "Completed Projects" , count : "24"},
        {text : "Companies work" , count : "06"}
    ]
    return (
        <section id="about" className="py-10 text-white">
            <div className="mt-8 text-center">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My Introduction</p>
                <div className="flex md:flex-rew flex-coll-reverse items-center gap-12 md:gap-6 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {
                                   info.map(content => (
                                       <div key={content.text}>
                                           <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                               {content.count}
                                               <span className="text-cyan-600">+</span>{"  "}
                                           </h3>
                                           <span className="md:text-base text-xs">{content.text}</span>
                                       </div>
                                   ))}
                            </div>
                            <br/>
                            <br/>
                            <a href="../assets/canvas.png" download>
                                <button className="btn-primary">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex mt-6 md:mt-0 items-center justify-center">
                        <div className="lg:w-96 h-full aboutImg relative sm:w-10/12 w-11/12 max-w-sm">
                            <img alt="" src={aboutImg} className="w-full object-cover bg-cyan-600 rounded-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
