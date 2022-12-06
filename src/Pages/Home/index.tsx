import { Play } from 'phosphor-react';
import {
  ButtonContainer,
  CountdownContainer,
  FormContainer,
  InputTask,
  HomeContainer,
  MinutesTask,
  Separator,
} from './home.styles';

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <datalist id='task-sugestion'>
            <option value='Project 1' />
            <option value='Project 2' />
            <option value='Project 3' />
            <option value='Project 4' />
          </datalist>
          <label htmlFor='task'>I'm will work in</label>
          <InputTask
            list='task-sugestion'
            placeholder='Create a task'
            id='task'
            type='text'
          />
          <label htmlFor='minutesAmount'>About</label>
          <MinutesTask
            step={5}
            min={5}
            max={60}
            placeholder='00'
            id='minutesAmount'
            type='number'
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

        <ButtonContainer disabled type='submit'>
          <Play />
          Start
        </ButtonContainer>
      </form>
    </HomeContainer>
  );
}
