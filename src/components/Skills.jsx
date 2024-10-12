import html from '../assets/Skills/html.png';
import css from '../assets/Skills/css.png';
import bootstrap from '../assets/Skills/bootstrap.png';
import tailwind from '../assets/Skills/tailwind.png';
import javascript from '../assets/Skills/js.png';
import react from '../assets/Skills/react.png';
import node from '../assets/Skills/node.png';
import express from '../assets/Skills/express.png';
import mongodb from '../assets/Skills/mongodb.png';
import github from '../assets/Skills/github.png';
import firebase from '../assets/Skills/firebase.png';
import figma from '../assets/Skills/figma.png';
import reduxImg from '../assets/Skills/redux.png';
import mongooseImg from '../assets/Skills/mongoose.png'
import socket from '../assets/Skills/socket.png'

const Skills = () => {
    return (
        <div className="bg-[#171717] text-white" id='skills'>
            <h2 className="text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 font-semibold w-48 mx-auto">Skills</h2>
            <p className="text-center text-xl mt-3">This are the technologies I have worked with</p>
            <div data-aos="fadeInUp" data-aos-easing="linear" data-aos-duration="1000" className="grid grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-16 py-10 aos-init aos-animate">
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 hover:shadow-lg hover:shadow-red-600 flex flex-col items-center">
                    <img className="w-20" src={html} alt="" />
                    <p className="text-xl mt-2">HTML</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={css} alt="" />
                    <p className="text-xl mt-2">CSS</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={bootstrap} alt="" />
                    <p className="text-xl mt-2">Bootstrap</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={tailwind} alt="" />
                    <p className="text-xl mt-2">Tailwind</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={javascript} alt="" />
                    <p className="text-xl mt-2">JavaScript</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={react} alt="" />
                    <p className="text-xl mt-2">React</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={reduxImg} alt="" />
                    <p className="text-xl mt-2">Redux</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={node} alt="" />
                    <p className="text-xl mt-2">Node. Js</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={express} alt="" />
                    <p className="text-xl mt-2">Express. Js</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={socket} alt="" />
                    <p className="text-xl mt-2">Socket.io</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={mongodb} alt="" />
                    <p className="text-xl mt-2">MongoDB</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={mongooseImg} alt="" />
                    <p className="text-xl mt-2">Mongoose</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={github} alt="" />
                    <p className="text-xl mt-2">GitHub</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={firebase} alt="" />
                    <p className="text-xl mt-2">Firebase</p>
                </div>
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
                    <img className="w-20" src={figma} alt="" />
                    <p className="text-xl mt-2">Figma</p>
                </div>
               
            </div>
            
        </div>
    );
};

export default Skills;