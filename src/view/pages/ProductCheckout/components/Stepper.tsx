import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface IStepperProps {
  initialStep?: number;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Stepper({ steps, initialStep = 0 }: IStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  console.log(currentStep);
  return (
    <div className="flex flex-col w-full px-4 ">
      <div className="flex justify-center lg:justify-end  h-auto gap-4">
        <ul className="flex gap-2 max-w-prose ">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="flex flex-col items-center cursor-pointer min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
              onClick={() => setCurrentStep(index)}
            >
              <div className="relative w-full min-w-8 h-[1.560px] mb-2">
                <div className="absolute inset-0 bg-gray-300 transition-all ">
                  <div
                    className={`h-full transition-all w-full  ${
                      currentStep >= index ? "bg-orange-500" : "bg-transparent"
                    }`}
                  ></div>

                  <li
                    className={`uppercase tracking-[-0.3px] text-[11px] sm:text-sm font-bold mt-2 text-center ${
                      currentStep >= index ? "text-zinc-800" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex items-center gap-2 hover:text-orange-500">
        <IoArrowBackOutline className="w-5 h-5" />
        <Link
          to="/"
          className="font-bold text-xs uppercase tracking-[-0.3px] hover:text-orange-500 selection::text-orange-500"
        >
          continuar comprando
        </Link>
      </div>
      <div className="mt-10">{steps[currentStep].content}</div>
    </div>
  );
}
