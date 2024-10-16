import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox"
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            recusandae possimus natus voluptates rem voluptatibus similique
            deserunt perferendis quis beatae necessitatibus quaerat ex fuga
            accusamus praesentium, numquam quia repellat omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            neque soluta ad eveniet illum, amet voluptatum maiores, consequuntur
            quisquam, debitis dignissimos. Totam iusto magni tenetur? Aperiam
            praesentium reprehenderit natus distinctio.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a minima
            voluptates facilis mollitia eum porro temporibus suscipit et velit
            deserunt est officia voluptatem eaque, eos vitae aut. Eum,
            laudantium.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, illo facere! Ex, sunt fuga. Ducimus non odio perferendis. Aliquam quae magnam modi aute</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, illo facere! Ex, sunt fuga. Ducimus non odio perferendis. Aliquam quae magnam modi aute</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, illo facere! Ex, sunt fuga. Ducimus non odio perferendis. Aliquam quae magnam modi aute</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
