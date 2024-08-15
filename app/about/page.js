import Link from 'next/link';

export const metadata = {
  title: 'About Me',
};

export default function About() {
  return (
    <div className="p-4">
      <header className="bg-gray-800 p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">About Me</h1>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Group-5(Ganesh-8970354, Abhaya-8981100)</h2>
        <div className="w-full max-w-screen-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Hi, I'm Ganesh/Aabhaya, a Software Engineer</h2>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            With a strong background in software development, I specialize in creating scalable and efficient solutions for a variety of applications. I am proficient in multiple programming languages and frameworks, and I thrive on solving complex problems and delivering high-quality code.
          </p>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            I have experience in front-end and back-end development, including working with technologies such as JavaScript, TypeScript, React, Node.js, and more. My work involves designing user-friendly interfaces, developing robust APIs, and integrating various systems to achieve seamless functionality.
          </p>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            I am passionate about continuous learning and staying up-to-date with the latest industry trends. Whether it's exploring new technologies or contributing to open-source projects, I am always eager to expand my knowledge and take on new challenges.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Feel free to explore my portfolio to see some of the projects I’ve worked on. If you have any questions or if you'd like to collaborate on a project, don't hesitate to reach out!
          </p>
        </div>
      </main>
    </div>
  );
}
