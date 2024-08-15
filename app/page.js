import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/images/profilepic (1).png';

export const metadata = {
  title: 'Portfolio - Abhaya/Ganesh',
};

export default function Home() {
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

      <main className="flex flex-col items-center mt-12">
        <div className="w-32 h-32 relative mb-6">
          <Image
            src={profilePic}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Group-5(Ganesh-8970354, Abhaya-8981100)</h2>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">Hello, I'm Ganesh/Abhaya</h1>
        <p className="text-lg text-center mb-6 text-gray-700">
          I am a passionate software engineer with experience in developing cutting-edge applications and solving complex problems. Explore my portfolio to see my work and learn more about my skills and projects.
        </p>
        <Link
          href="/portfolio"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          View My Work
        </Link>
      </main>
    </div>
  );
}
