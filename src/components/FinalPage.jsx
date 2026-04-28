import confetti from "canvas-confetti";
import { useState } from "react";

export default function FinalPage() {
  const [accepted, setAccepted] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [noText, setNoText] = useState("NO");
  const [noBecomesYes, setNoBecomesYes] = useState(false);

  const handleYes = () => {
    setAccepted(true);

    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const handleNo = () => {
    const messages = [
      "Sure gyud?",
      "Think again...",
      "Last chance",
    ];

    const next = noClicks + 1;
    setNoClicks(next);

    setNoText(messages[noClicks % messages.length]);

    if (next >= 4) {
      setNoBecomesYes(true);
    }
  };

  return (
    <div className="min-h-[400px] flex items-center justify-center">

      {!accepted ? (
        <div className="text-center animate-fade-in">

          <h1 className="text-3xl font-bold text-pink-600 mb-8">
            So, will you be my girlfriend again?
          </h1>

          <div className="flex justify-center gap-4">

            <button
              onClick={handleYes}
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-pink-600 transition"
            >
              YES
            </button>

            {!noBecomesYes ? (
              <button
                onClick={handleNo}
                className="bg-gray-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
              >
                {noText}
              </button>
            ) : (
              <button
                onClick={handleYes}
                className="bg-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 animate-pulse transition"
              >
                FINE… YES
              </button>
            )}

          </div>

          {noClicks > 2 && !noBecomesYes && (
            <p className="mt-6 text-sm text-red-400 animate-pulse">
              SYSTEM ERROR: the input is invalid, please choose YES to continue
            </p>
          )}

        </div>

      ) : (
        <div className="text-center animate-fade-in max-w-md">

            <img
              src="/dist/assets/us.jpg"
              alt="us"
              className="rounded-xl mb-5 w-full object-cover"
            />

            <h1 className="text-3xl font-bold text-pink-600 mb-3">
                Welcome back, my love!
            </h1>

          </div>

      )}
    </div>
  );
}