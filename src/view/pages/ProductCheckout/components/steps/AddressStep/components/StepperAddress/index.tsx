import { createContext, useCallback, useState } from "react";
import { cn } from "../../../../../../../../app/utils/cn";
import { Button } from "../../../../../../../components/Button";
import { useStepper } from "./useStepperAddress";

interface IStepperProps {
  initialStep?: number;
  steps: {
    label?: string;
    content?: React.ReactNode;
  }[];
}

interface IStepperContext {
  nextStep: () => void;
  currentStep: number;
  getEmailSelected: (email: string) => void;
}

export const StepperAddresContext = createContext({} as IStepperContext);

export function StepperAddress({ steps, initialStep = 0 }: IStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [email, setEmail] = useState("");
  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => Math.min(steps.length - 1, prevState + 1));
  }, [steps.length]);

  const getEmailSelected = useCallback((email: string) => {
    setEmail(email);
  }, []);

  return (
    <StepperAddresContext.Provider
      value={{ nextStep, currentStep, getEmailSelected }}
    >
      <div className="flex flex-col gap-8 w-full">
        {steps.map((step, index) => (
          <div key={step.label}>
            <div
              className={cn(
                index < currentStep
                  ? "collapsed-form  border-b border-zinc-200 border-none"
                  : "pb-8 ",
                index === currentStep
                  ? "border-none"
                  : "border-b border-zinc-200"
              )}
            >
              <h3 className="font-bold text-2xl flex gap-4 items-start tracking-[-1px]">
                <span
                  className={cn(
                    "inline-block text-xl font-black",
                    index === currentStep ? "text-red-600" : "text-gray-500"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {step.label}
              </h3>
            </div>
            {index === currentStep && step.content}
            {index === 0 && currentStep > 0 && (
              <div className="mt-2">
                <input
                  type="text"
                  value={email}
                  disabled
                  className="bg-gray-100 border border-gray-300 rounded p-2 w-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </StepperAddresContext.Provider>
  );
}

export function StepperNextStepButton({
  className,
  preventDefault = false,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick"> & {
  preventDefault?: boolean;
}) {
  const { nextStep } = useStepper();
  return (
    <Button
      onClick={!preventDefault ? nextStep : undefined}
      children={children}
      className={className}
      {...props}
    />
  );
}
