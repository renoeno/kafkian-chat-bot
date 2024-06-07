'use client'

import React, { useState } from "react";
import { ArrowCircleUp } from "../components/ArrowCircleUp";
import { analyze } from "@/utils/ai";

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState("Hi. On the 100th anniversary of Franz Kafka's death, he returns to give absurd advice about the human condition or what to eat for lunch. Ask anything.")

const handleChangeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setQuestion(e.target.value)

}

const handleSubmitQuestion = async () => {
  const response = await analyze(question);
  
  if(response) {
    setResponse(response.response + "\nAsk me another question.")
  }
}

  return (
    <div className="h-screen w-screen">
      <div className="w-full max-w-[920px] mx-auto h-full flex flex-col justify-center items-center">
        <div className="w-full px-8">
          <div className="mb-12 pr-16">
            <h1 className="text-2xl">
              {response}
            </h1>
          </div>
          <div className="w-full h-20 border-2 rounded-xl flex px-2 items-center">
            <textarea value={question} onChange={handleChangeQuestion} className="h-16 w-full p-2 m-2 resize-none focus:outline-none"></textarea>
            <ArrowCircleUp fontSize={36} className="cursor-pointer" onClick={handleSubmitQuestion} />
          </div>
        </div>
      </div>
    </div>
  )
}
