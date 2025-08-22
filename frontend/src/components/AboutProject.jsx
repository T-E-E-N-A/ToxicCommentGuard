import React from "react";
import { motion } from "framer-motion";

const AboutProject = () => {
  return (
    <section
      id="project-info" // important for Header anchor link
      className="min-h-screen flex items-center justify-center bg-black/60 text-white px-6 py-16"
    >
      <motion.div
        className="max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // triggers only once when 20% is visible
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">
          About This Project
        </h2>

        <p className="mb-4 text-lg leading-relaxed text-gray-200">
          <strong>Toxic Comment Guard</strong> is a machine learning powered
          application built to detect toxic, harmful, or inappropriate comments
          in real-time. It leverages Natural Language Processing (NLP) models
          trained on large datasets to analyze input text and classify its
          toxicity levels.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="font-semibold text-indigo-300">Frontend:</span>{" "}
            React + TailwindCSS (Vite) for a fast and elegant UI.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Backend:</span>{" "}
            FastAPI serving ML models via REST API.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Model:</span> NLP
            based toxic comment classifier trained on benchmark datasets.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Features:</span>{" "}
            Real-time comment detection, responsive UI, animated background,
            clean visualization.
          </li>
        </ul>

        <p className="mt-6 text-gray-300 text-center italic">
          This project demonstrates the power of combining{" "}
          <span className="text-indigo-300">AI</span> with{" "}
          <span className="text-indigo-300">modern web development</span> to
          create safe and interactive applications.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutProject;
