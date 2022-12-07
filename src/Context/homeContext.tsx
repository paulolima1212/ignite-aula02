import { createContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const homeContext = createContext({} as HomeContextProps);

interface NewCycleProps {
  task: string;
  minutesAmount: number;
}

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface HomeContextProps {
  activeCycleId: string | null;
  amountSecondPassed: number;
  totalSeconds: number;
  currentSeconds: number;
  activeCycle: Cycle | undefined;
  setActiveCycleAsFinished: () => void;
  handleCreateNewCycle: (data: NewCycleProps) => void;
  handleInterruptCycle: () => void;
  setAmountSecondPassed: (amount: number) => void;
}

// const isSubmitDisabled = !task && !minAmount;

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondPassed, setAmountSecondPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  function handleCreateNewCycle(data: NewCycleProps) {
    console.log('pass');
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((prev) => [...prev, newCycle]);
    setActiveCycleId(id);
    setAmountSecondPassed(0);
  }

  function setActiveCycleAsFinished() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function handleInterruptCycle() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0;

  return (
    <homeContext.Provider
      value={{
        activeCycle,
        handleCreateNewCycle,
        handleInterruptCycle,
        setAmountSecondPassed,
        setActiveCycleAsFinished,
        amountSecondPassed,
        activeCycleId,
        totalSeconds,
        currentSeconds,
      }}
    >
      {children}
    </homeContext.Provider>
  );
}
