import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  ButtonContainer,
  CountdownContainer,
  FormContainer,
  InputTask,
  HomeContainer,
  MinutesTask,
  Separator,
} from './home.styles';

const newCycleValidationSchema = zod.object({
  task: zod.string().min(8, 'Fill the task min 8 character'),
  minutesAmount: zod
    .number()
    .min(5, 'Min time of task will be for 5 minutes')
    .max(60, 'Max time of tas will be for 60 minutes'),
});

type NewFormDataType = zod.infer<typeof newCycleValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewFormDataType>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleNewTask(data: NewFormDataType) {
    console.log(data);
    reset();
  }

  const task = watch('task');
  const minAmount = watch('minutesAmount');

  const isSubmitDisabled = !task && !minAmount;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewTask)}>
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
            {...register('task')}
          />
          <label htmlFor='minutesAmount'>About</label>
          <MinutesTask
            step={5}
            min={5}
            max={60}
            placeholder='00'
            id='minutesAmount'
            type='number'
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <ButtonContainer disabled={isSubmitDisabled} type='submit'>
          <Play />
          Start
        </ButtonContainer>
      </form>
    </HomeContainer>
  );
}
