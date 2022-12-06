import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { differenceInSeconds } from 'date-fns';
import * as zod from 'zod';

import { HandPalm, Play } from 'phosphor-react';

import {
  CountdownContainer,
  FormContainer,
  InputTask,
  HomeContainer,
  MinutesTask,
  Separator,
  StartcountdownButton,
  StopcountdownButton,
} from './home.styles';

const newCycleValidationSchema = zod.object({
  task: zod.string().min(8, 'Fill the task min 8 character'),
  minutesAmount: zod
    .number()
    .min(1, 'Min time of task will be for 5 minutes')
    .max(60, 'Max time of tas will be for 60 minutes'),
});

type NewFormDataType = zod.infer<typeof newCycleValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondPassed, setAmountSecondPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      //@ts-ignore
      interval = setInterval(() => {
        const diffSecondsCycle = differenceInSeconds(
          new Date(),
          activeCycle!.startDate
        );

        if (diffSecondsCycle >= totalSeconds) {
          setCycles((prev) =>
            prev.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            })
          );
          setAmountSecondPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondPassed(diffSecondsCycle);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, totalSeconds]);

  const { register, handleSubmit, watch, reset } = useForm<NewFormDataType>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewFormDataType) {
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

    reset();
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

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  const task = watch('task');
  const minAmount = watch('minutesAmount');

  const isSubmitDisabled = !task && !minAmount;

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <datalist id='task-suggestion'>
            <option value='Project 1' />
            <option value='Project 2' />
            <option value='Project 3' />
            <option value='Project 4' />
          </datalist>
          <label htmlFor='task'>I'm will work in</label>
          <InputTask
            list='task-suggestion'
            placeholder='Create a task'
            id='task'
            type='text'
            disabled={!!activeCycle}
            {...register('task')}
          />
          <label htmlFor='minutesAmount'>About</label>
          <MinutesTask
            step={5}
            min={1}
            max={60}
            placeholder='00'
            id='minutesAmount'
            type='number'
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopcountdownButton onClick={handleInterruptCycle} type='button'>
            <HandPalm />
            Stop
          </StopcountdownButton>
        ) : (
          <StartcountdownButton disabled={isSubmitDisabled} type='submit'>
            <Play />
            Start
          </StartcountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
