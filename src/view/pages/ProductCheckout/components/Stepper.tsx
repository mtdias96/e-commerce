import { useState } from "react";

interface IStepperProps {
  initialStep?: number;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Stepper({ steps, initialStep = 0 }: IStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  return (
    <div className="flex flex-col w-full">
      <ul className="flex justify-between items-center w-full gap-2 p-2">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="flex flex-col items-center cursor-pointer min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
            onClick={() => setCurrentStep(index)} // Adiciona funcionalidade de clicar para mudar de etapa
          >
            <div className="relative w-full h-[1.560px] mb-2">
              <div className="absolute inset-0 bg-gray-300">
                <div
                  className={`h-full ${
                    currentStep >= index ? "bg-orange-500" : "bg-transparent"
                  }`}
                  style={{ width: "100%" }}
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
      <div className="mt-10">{steps[currentStep].content}</div>
    </div>
  );
}
