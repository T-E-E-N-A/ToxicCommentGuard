
const AboutFooter = () => {
  return (
    <footer
      id="about"
      className="bg-black/70 text-gray-300 py-10 px-6 mt-16 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About Website */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            About Website
          </h3>
          <p className="text-sm leading-relaxed">
            This platform detects and highlights toxic or harmful comments using
            Machine Learning (NLP). Built with a modern tech stack combining
            <span className="text-indigo-300"> FastAPI</span> backend and{" "}
            <span className="text-indigo-300">React + Tailwind</span> frontend,
            it demonstrates how AI can enhance online communication safety.
          </p>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            Team Members
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold text-white">Teena</span> –
              Fullstack Developer, Core ML & API Integrations
            </li>
            <li>
              <span className="font-semibold text-white">Prasoon</span> –
              ML Engineer, Assisted in Model Training & Testing
            </li>
            <li>
              <span className="font-semibold text-white">Deeksha</span> – 
              Team Lead, Presentation & Technical Coordination
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            Contact
          </h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://github.com/Deeksha224/ToxicCommentGuard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition underline"
            >
              GitHub
            </a>
            <a
              href="mailto:teena.gla_cs23@gla.ac.in"
              className="hover:text-white transition underline"
            >
              teena.gla_cs23@gla.ac.in
            </a>
            <a
              href="mailto:prasoon.kumar_cs23@gla.ac.in"
              className="hover:text-white transition underline"
            >
              prasoon.kumar_cs23@gla.ac.in
            </a>
            <a
              href="mailto:deeksha.agarwal_cs23@gla.ac.in"
              className="hover:text-white transition underline"
            >
              deeksha.agarwal_cs23@gla.ac.in
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Toxic Comment Guard. All rights reserved.
      </p>
    </footer>
  );
};

export default AboutFooter;
