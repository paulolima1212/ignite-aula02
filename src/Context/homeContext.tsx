import { createContext, useReducer, useState } from 'react';
import {
  addNewCycleAction,
  interruptActiveCycleAction,
  setCurrentCycleAsFinishedAction,
} from '../Reducers/Cycles/actions';
import { CyclesReducer } from '../Reducers/Cycles/reducer';

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
  cycles: Cycle[];
  setActiveCycleAsFinished: () => void;
  createNewCycle: (data: NewCycleProps) => void;
  handleInterruptCycle: () => void;
  setAmountSecondPassed: (amount: number) => void;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
    activeCycleId: null,
    cycles: [],
  });

  const [amountSecondPassed, setAmountSecondPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  function createNewCycle(data: NewCycleProps) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondPassed(0);
  }

  function setActiveCycleAsFinished() {
    dispatch(setCurrentCycleAsFinishedAction());
  }

  function handleInterruptCycle() {
    dispatch(interruptActiveCycleAction());
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0;

  return (
    <homeContext.Provider
      value={{
        activeCycle,
        createNewCycle,
        handleInterruptCycle,
        setAmountSecondPassed,
        setActiveCycleAsFinished,
        amountSecondPassed,
        activeCycleId,
        totalSeconds,
        currentSeconds,
        cycles,
      }}
    >
      {children}
    </homeContext.Provider>
  );
}
