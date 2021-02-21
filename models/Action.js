import {ADD_CARD} from './Type';

export const addCards = ( team, cards ) => {
  return {
    type: ADD_CARD,
    team: team,
    payload: cards,
  }
}