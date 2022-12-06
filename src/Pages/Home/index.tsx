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
          <label htmlFor='task'>I'm will work in</label>
          <InputTask id='task' type='text' />
          <label htmlFor='minutesAmount'>About</label>
          <MinutesTask id='minutesAmount' type='number' />
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
