import { useHomeContext } from '../../Hooks/useHomeContext';

import { HandPalm, Play } from 'phosphor-react';

import {
  HomeContainer,
  StartcountdownButton,
  StopcountdownButton,
} from './home.styles';

import { Countdown } from './Components/Countdown';
import { NewCycleForm } from './Components/NewCycleForm';

import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

export function Home() {
  const { activeCycle, handleCreateNewCycle, handleInterruptCycle } =
    useHomeContext();

  type NewFormDataType = zod.infer<typeof newCycleValidationSchema>;
  const newCycleValidationSchema = zod.object({
    task: zod.string().min(8, 'Fill the task min 8 character'),
    minutesAmount: zod
      .number()
      .min(1, 'Min time of task will be for 5 minutes')
      .max(60, 'Max time of tas will be for 60 minutes'),
  });

  const newFormCycle = useForm<NewFormDataType>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newFormCycle;

  const task = watch('task');

  const isSubmitDisabled = !task;

  function createNewCycle(data: NewFormDataType) {
    handleCreateNewCycle(data);

    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newFormCycle}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

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
