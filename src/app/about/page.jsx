import Image from "next/image";
import React from "react";
import ronaldo from "../../assets/images/ronaldo.webp"
const AboutPage = () => {
  return (
    <div>
      <h2>This is AboutPage</h2>
      <p className="text-4xl text-center text-cyan-500 mb-6">The Goat Cristiano Ronaldo</p>
      <div className="grid grid-cols-3 gap-2">
        <Image
          height={300}
          width={300}
          src="/kvicha.png"
          alt="footballer"
        ></Image>
        <Image
          height={300}
          width={300}
          src={ronaldo}
          alt="footballer"
        ></Image>
        <Image
          height={300}
          width={300}
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/15/09/cristiano-ronaldo-10.jpg"
          alt="footballer"
        ></Image>
      </div>
    </div>
  );
};

export default AboutPage;
