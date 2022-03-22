type FSM_State = string

const EPSILON = '__epsilon'
const ELSE = '__else'

const FSM = () => {

  let allStates: Record<FSM_State, any> = {}
  let currentState: FSM_State
  let initialState: FSM_State
  let finalStates: Set<FSM_State> = new Set()

  const addState = (label: string, options?: any) => {
    allStates[label] = {
      label,
      transitions: {},
      ...options,
    }
    // parse options
    // set initial and final states
    return getState(label)
  }

  const removeState = (label: string) => {
    delete allStates[label]
  }

  const setCurrentState = (label: string) => {
    currentState = label
  }

  const getCurrentState = () => {
    return currentState
  }

  const setInitialState = (label: string) => {
    initialState = label
  }

  const getState = function (label: string)  {

    const state = allStates[label]

    const addTransition = (triggerLabel: string, newState: string) => {
      state.transitions[triggerLabel] = newState
      // @ts-ignore
      // console.log({addTransitionTHIS: this})
    }

    const removeTransition = (triggerLabel: string) => {
      delete state.transitions[triggerLabel]
    }

    return {
      addTransition,
      removeTransition,
    }

  }

  const init = () => {
    currentState = initialState
  }

  const next = (trigger: string) => {
    currentState = allStates[currentState].transitions[trigger]
    return currentState
  }

  return {
    addState,
    removeState,
    setCurrentState,
    getCurrentState,
    setInitialState,
    getState,
    init,
    next,
  }

}


const f = FSM()
f.addState('even')
f.addState('odd')
f.getState('even').addTransition('0', 'odd')
f.getState('even').addTransition('1', 'even')
f.getState('odd').addTransition('0', 'even')
f.getState('odd').addTransition('1', 'odd')
f.setInitialState('even')
f.init()

'0001011101011'.split('').forEach(char => {
  console.log(`${f.getCurrentState()}\t-- ${char} -->\t${f.next(char)}`)
})
