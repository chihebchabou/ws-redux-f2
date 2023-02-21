import { DECREMENT, INCREMENT, INCREMENT_BY_TEN } from "./types"

// Increment
export const increment = () => {
  return {type: INCREMENT}
}

// Decrement
export const decrement = () => {
  return {type: DECREMENT}
}

// Increment by ten
export const incrementByTen = () => {
  return {type: INCREMENT_BY_TEN, payload: 10}
}