import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../images/background.jpg"; 
export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center justify-center text-center text-white pt-32 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          CYBERSECURITY, CODE & CREATIVE STORYTELLING
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          I'm a cybersecurity professional who loves to communicate and create
          content. I enjoy developing accessible websites and telling compelling
          stories through video.
        </p>
        <motion.a
          href="#portfolio"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          CHECK OUT MY WORK
        </motion.a>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 text-white">
        {["HTML", "React", "RR6", "Premiere Pro"].map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="border border-white rounded-full px-4 py-2 cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Portfolio */}
      <div id="portfolio" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/webdesign.jpg" alt="Web Design" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">Web Design</h3>
            <p className="text-gray-300">In Progress</p>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/reactapp.jpg" alt="React App" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">React App</h3>
            <p className="text-gray-300">Blog Platform</p>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/videoediting.jpg" alt="Video Editing" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">Video Editing</h3>
            <p className="text-gray-300">Travel Montage</p>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="py-16 px-4 bg-black bg-opacity-70 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <p className="italic">"Sam is great to work with. He's reliable, skilled, communicative, and creative!"</p>
          </div>
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <p className="italic">"I appreciate Sam’s positivity and his talent for teaching others."</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 mb-4 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-4 rounded bg-white text-black"
          />
          <textarea
            placeholder="Message"
            className="block w-full p-2 mb-4 rounded bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
