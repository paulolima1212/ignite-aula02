import { Cycle } from '../../Context/homeContext';

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  SET_ACTIVE_CYCLE_AS_FINISHED = 'SET_ACTIVE_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function setCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.SET_ACTIVE_CYCLE_AS_FINISHED,
  };
}

export function interruptActiveCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  };
}
