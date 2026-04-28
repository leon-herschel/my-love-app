import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import FinalPage from "./components/FinalPage";
import LoveScale from "./components/LoveScale";

const girlfriendName = "Pingu";

export default function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-4">
      
      {/* MAIN CARD */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 text-center transition-all duration-500">

        {step === 0 && (
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
              Hi {girlfriendName}!
            </h1>

            <p className="text-gray-700 mb-6">
              I made something for you... click if you're ready
            </p>

            <button
              onClick={next}
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-pink-600 transition duration-300"
            >
              Click me 💌
            </button>
          </div>
        )}

        {step === 1 && (
          <QuestionCard question="Do you miss me? 🥺" next={next} />
        )}

        {step === 2 && (
          <QuestionCard question="Kaayo kaayo gyud? 😏" next={next} />
        )}

        {step === 3 && <LoveScale next={next} />}

        {step === 4 && <FinalPage name={girlfriendName} />}
      </div>
    </div>
  );
}