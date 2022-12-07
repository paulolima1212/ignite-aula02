import { differenceInSeconds } from 'date-fns';
import { useEffect } from 'react';
import { useHomeContext } from '../../../../Hooks/useHomeContext';
import { CountdownContainer, Separator } from './countdown.styles';

export function Countdown() {
  const {
    activeCycle,
    setAmountSecondPassed,
    activeCycleId,
    totalSeconds,
    currentSeconds,
    setActiveCycleAsFinished,
  } = useHomeContext();

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    let interval: any;

    if (activeCycle) {
      interval = setInterval(() => {
        const diffSecondsCycle = differenceInSeconds(
          new Date(),
          new Date(activeCycle!.startDate)
        );

        if (diffSecondsCycle >= totalSeconds) {
          setActiveCycleAsFinished();

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
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    totalSeconds,
    setActiveCycleAsFinished,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
