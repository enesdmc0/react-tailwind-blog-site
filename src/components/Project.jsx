import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from 'swiper';
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.jpg"
import project3 from "../assets/project-3.jpg"
import project4 from "../assets/project-4.jpg"
import project5 from "../assets/project-5.png"
import project_person from "../assets/project_person1.png"
const Project = () => {
    const projects = [
        {
            img : project1,
            name : "Movie App",
            github_link : "https://github.com/enesdmc0/react-country-info",
            live_link : "https://country-info-dmc.netlify.app/",
        },
        {
            img : project2,
            name : "Job Search Web",
            github_link : "https://github.com/enesdmc0/react-country-info",
            live_link : "https://country-info-dmc.netlify.app/",
        },
        {
            img : project3,
            name : "Highking",
            github_link : "https://github.com/enesdmc0/react-country-info",
            live_link : "https://country-info-dmc.netlify.app/",
        },
        {
            img : project4,
            name : "Weather App",
            github_link : "https://github.com/enesdmc0/react-country-info",
            live_link : "https://country-info-dmc.netlify.app/",
        },
        {
            img : project5,
            name : "Quiz App",
            github_link : "https://github.com/enesdmc0/react-country-info",
            live_link : "https://country-info-dmc.netlify.app/",
        }
    ]
    return (
        <div id="project" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works?</p>
            </div>
            <br/>
            <div className="flex max-w-6xl px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{768:{slidesPerView:2,},}}
                        loop={true}
                    autoplay={{delay:3000}}
                    pagination={{clickable: true}}
                    modules={[Pagination, Autoplay]}>
                        {
                            projects.map((project, i) => (
                                <SwiperSlide key={i}>
                                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                        <img alt="" src={project.img} className="rounded-lg"/>
                                        <h3 className="text-xl my-4">{project.name}</h3>
                                        <div className="flex gap-3">
                                            <a className="text-cyan-600 bg-gray-800 px-2 p-1 inline-block" target="_blank" href={project.github_link}>Github</a>
                                            <a className="text-cyan-600 bg-gray-800 px-2 p-1 inline-block" target="_blank" href={project.live_link}>Live Demo</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <img alt="" src={project_person}/>
                </div>
            </div>
        </div>
    );
};

export default Project;
