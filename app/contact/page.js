import Link from 'next/link';

export const metadata = {
  title: 'Contact Me',
};

export default function Contact() {
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
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Contact Me</h1>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Group-5(Ganesh-8970354, Abhaya-8981100)</h2>
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <p className="text-lg mb-4 text-gray-700">
            I'm always open to new opportunities and collaborations. If you'd like to get in touch, please feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="mt-4">
            <p className="text-lg mb-2 text-gray-700 font-semibold">Email:</p>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-500 hover:underline"
            >
              your.email@example.com
            </a>
          </div>
          <div className="mt-4">
            <p className="text-lg mb-2 text-gray-700 font-semibold">Follow me on:</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
