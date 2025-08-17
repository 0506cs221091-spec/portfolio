import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Award, Book, Briefcase, Code, Star } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-50 via-fuchsia-100 to-violet-100 text-gray-800 font-sans">
      {}
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-8 shadow-lg text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-extrabold">
          Laxmi Nanda
        </motion.h1>
        <p className="text-lg mt-2">Computer Science Engineering Student</p>
      </header>

      {}
      <section className="p-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Ambitious and dedicated Computer Science Engineering student with a strong
            foundation in C, Java and frontend development (HTML, CSS, JavaScript).
            Passionate about building impactful solutions, continuously learning,
            and growing in the tech field.
          </p>
        </motion.div>
      </section>

      {}
      <section className="p-10 bg-white shadow-xl rounded-2xl m-6">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Book /> Education</h2>
        <ul className="space-y-3 text-lg">
          <li>🎓 B.Tech – Bansal Institute of Science and Technology (2022–2026) | CGPA: 8.20</li>
          <li>🏫 12th – Govt. Excellence School, Mandla (2022) | 85.04%</li>
          <li>🏫 10th – Govt. Excellence School, Mandla (2020) | 84.25%</li>
        </ul>
      </section>

      {}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Code /> Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-orange-100 to-rose-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Programming Languages</h3>
              <p>C, Java, SQL (Basic)</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-pink-100 to-violet-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Web Technologies</h3>
              <p>HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-teal-100 to-green-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Tools</h3>
              <p>VS Code, Eclipse, IntelliJ IDEA, MS Office</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {}
      <section className="p-10 bg-white shadow-xl rounded-2xl m-6">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Briefcase /> Projects</h2>
        <div className="space-y-4">
          <Card className="hover:bg-fuchsia-50 transition">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl">E-Commerce Website</h3>
              <p>Implemented authentication, product categorization, and order management using HTML, CSS, and JavaScript.</p>
            </CardContent>
          </Card>
          <Card className="hover:bg-fuchsia-50 transition">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl">Online Election Web</h3>
              <p>Frontend Developer – Developed UI for voter & election management.</p>
            </CardContent>
          </Card>
          <Card className="hover:bg-fuchsia-50 transition">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl">Mini Calculator</h3>
              <p>A web-based calculator for performing basic arithmetic operations.</p>
               {}
    <div className="mt-4 flex gap-6">
      <a 
        href="https://github.com/0506cs221091-spec/Mini-Calculator/blob/main/calculator.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        🔗 GitHub Code
      </a>
      <a 
        href="https://your-live-demo-link.netlify.app"   
        target="_blank" 
        rel="noopener noreferrer"
        className="text-green-600 hover:underline"
      >
        🚀 Live Demo
      </a>
    </div>
              
            </CardContent>
          </Card>
        </div>
      </section>

      {}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Briefcase /> Internships</h2>
        <ul className="space-y-3 text-lg">
          <li>Technotask (Sept 2024 – Feb 2025)</li>
          <li>CodSoft (Dec 2024 – Jan 2025)</li>
        </ul>
      </section>

      {}
      <section className="p-10 bg-white shadow-xl rounded-2xl m-6">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Award /> Certifications</h2>
        <ul className="space-y-3 text-lg">
          <li>✔️ C – Sharma Computer Academy (2023)</li>
          <li>✔️ Java with DSA – Coding Thinker (2024)</li>
          <li>✔️ Web Development – Coding Thinker (2025)</li>
          <li>✔️ Java Basic, SQL Basic, SQL Advance – HackerRank (2024)</li>
        </ul>
      </section>

      {}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Star /> Achievements</h2>
        <ul className="space-y-3 text-lg">
          <li>🏅 NSS Certificates (2024)</li>
          <li>🏅 Smart India Hackathon (2023)</li>
          <li>🏅 DBMS Certificate from NPTEL (2025)</li>
          <li>🏅 District Level Dancer (2020)</li>
        </ul>
      </section>

      {}
      <footer className="p-10 bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p>Email: 0506cs221091@gmail.com | Phone: 9109322207</p>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/laxmi-nanda" target="_blank" className="hover:text-gray-300"><Github /></a>
          <a href="https://www.linkedin.com/in/laxmi-nanda-476837306/" target="_blank" className="hover:text-gray-300"><Linkedin /></a>
          <a href="mailto:0506cs221091@gmail.com" className="hover:text-gray-300"><Mail /></a>
          <a href="tel:9109322207" className="hover:text-gray-300"><Phone /></a>
        </div>
        <p className="mt-6 text-sm">© 2025 Laxmi Nanda. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
