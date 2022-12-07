import { FormContainer, InputTask, MinutesTask } from './newcycleform.styles';

import { useFormContext } from 'react-hook-form';
import { useHomeContext } from '../../../../Hooks/useHomeContext';

export function NewCycleForm() {
  const { activeCycle } = useHomeContext();

  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>I'm will work in</label>
      <InputTask
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
  );
}
