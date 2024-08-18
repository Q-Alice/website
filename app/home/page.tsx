import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const catchSlogans = [
    "Transforming computational and communication with quantum innovation"
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        {/* Left container */}
        <div className="w-2/3 p-8">
          <h1 className="text-4xl mb-6 font-bold">WELCOME TO PROJECT 😺QALICE</h1>
          {/* Render catch slogans */}
          {catchSlogans.map((slogan, index) => (
            <p key={index} className="text-xl mb-6">&#8220;{slogan}&#8221;</p> 
          ))}
          {/* Continue button */}
          <Link href="/info" passHref>
            <button className="bg-neorange hover:bg-neohover text-white font-bold py-2 px-4 rounded mb-12">Continue</button> {/* Increased margin-bottom */}
          </Link>
        </div>
        {/* Right container */}
        <div className="w-1/3 flex justify-center items-center">
          {/* GIF image */}
          <Image
            src="/photon.gif"
            alt="quantum"
            width={400}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
