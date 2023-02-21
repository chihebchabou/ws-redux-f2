import React from 'react'
import {connect} from 'react-redux'
import { increment, decrement, incrementByTen } from '../redux/actions/counterActions'

const Counter = ({counter, inc, dec, incByTen}) => {
  return (
    <div>
      <button onClick={() => inc()}>+</button>
      <span>{counter}</span>
      <button onClick={() => dec()}>-</button>
      <button onClick={() => incByTen()}>by ten</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  }
}

const mapDispatchToProps = disaptch => {
  return {
    inc : () => disaptch(increment()),
    dec: () => disaptch(decrement()),
    incByTen: () => disaptch(incrementByTen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)