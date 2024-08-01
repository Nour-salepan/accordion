"use client";

import questions from "@/app/questions";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Faq = () => {
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className={divStyles}>
      {questions.map((question: FAQ, index: number) => (
        <li
          key={index}
          onClick={() => handleToggle(index)}
          className="hover:opacity-90 divide-y-2 mt-4 bg-[#2D2D2D] px-6 py-4"
        >
          <div className={Top}>
            <h2 className="text-xl font-bold py-2">{question.question}</h2>
            {index === openedQuestion ? (
              <MinusIcon className="h-6 w-6 text-gray-200" />
            ) : (
              <PlusIcon className="h-6 w-6 text-gray-200" />
            )}
          </div>
          {index === openedQuestion && (
            <p className="py-5 text-gray-300">{question.answer}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Faq;

const divStyles = `
 mt-20
 text-white
`;

const Top = `
 flex
 justify-between
 items-center
 cursor-pointer
 transition-all
 duration-300
 ease-in-out
 pb-1
`;
