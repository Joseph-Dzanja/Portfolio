import Image from 'next/image';

export default function About() {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
        {/* Content */}
        <div className="flex-1 text-white space-y-4">
          <p>
            I’m a Software Developer and UI/UX Designer with a passion for building seamless digital experiences. I specialize in both front-end and back-end development, working with technologies like JavaScript, React, Vue, Node.js, and SQL to create dynamic and user-friendly applications.
          </p>
          <p>
            I enjoy writing clean, efficient code and designing intuitive interfaces that make technology more accessible. From web apps to management platforms, I focus on blending functionality with aesthetics to deliver impactful solutions. I’m always learning and pushing my skills to stay ahead in the ever-evolving tech landscape, turning ideas into reality with every project.
          </p>

          <hr className="my-4 border-gray-300" />

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            <div>
              <h1 className="font-semibold">Phone</h1>
              <p>+265 999-34-21-66<br />+265 887-36-55-79</p>
            </div>
            <div>
              <h1 className="font-semibold">Email</h1>
              <p>jhdzanja@gmail.com</p>
            </div>
            <div>
              <h1 className="font-semibold">Website</h1>
              <p>jhdzanja.com</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-xs md:max-w-sm flex-shrink-0">
          <Image
            src="/k.jpg"
            alt="My-photo"
            width={400}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
