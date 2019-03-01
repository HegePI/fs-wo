const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
  case 'GOOD':
    const goodState = good(state)
    return goodState

  case 'OK':
    const okState = ok(state)
    return okState

  case 'BAD':
    const badState = bad(state)
    return badState

  case 'ZERO':
    const zeroState = zero()
    return zeroState
  default: return state
  }

}

const good = (state) => {
  return (
    {
      good: state.good + 1,
      ok: state.ok,
      bad: state.bad
    }
  )
}
const ok = (state) => {
  return (
    {
      good: state.good,
      ok: state.ok + 1,
      bad: state.bad
    }
  )
}
const bad = (state) => {
  return (
    {
      good: state.good,
      ok: state.ok,
      bad: state.bad + 1
    }
  )
}
const zero = () => {
  return (
    {
      good: 0,
      ok: 0,
      bad: 0
    }
  )
}

export default counterReducer