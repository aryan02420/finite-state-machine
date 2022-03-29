import { FSM } from './index'

const f = FSM()
f.addState('even')
f.addState('odd')
f.getState('even').addTransition('0', 'odd')
f.getState('even').addTransition('1', 'even')
f.getState('odd').addTransition('0', 'even')
f.getState('odd').addTransition('1', 'odd')
f.setInitialState('even')

describe('DFA', () => {
  
  test('odd 0s', () => {
    f.init()
    '0'.split('').forEach(f.next)
    expect(f.getCurrentState()).toBe('odd')
  })
  
  test('even 0s', () => {
    f.init()
    '1'.split('').forEach(f.next)
    expect(f.getCurrentState()).toBe('even')
  })

})