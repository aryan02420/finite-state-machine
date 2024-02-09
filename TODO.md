alphabets<string> = Set(['0', '1'])
states<string> = Set(['A', 'B', 'C'])
transitions<state, alphabets> = {
  'A': {
    '0': (m) => Set([m['B']]),
    default: (m) =>  Set([m['C']]),
    epsilon: (m) => Set([m['C']]),
  }
  'B'
  ...
}



const f = new FSM()
f.addState('A', {initial: true, onEnter: () => {}, onLeave: () => {}})
f.addState(['B', 'C'], {final: true})
f.state('A').addTransition('trigger_name1', 'B', () => {})
f.state('A').addTransition('trigger_name2', ['C', 'D'], () => {})

f.setState('A')
f.setState(['B', 'C'])

f.removeState()
f.state('A').removeTransition()

f.init()
f.next()
f.getState()
f.check


make-dfa
make-ndfa
union-sm
concat-sm
kstar-sm
kplus-sm
zero-or-one-sm
repeat-sm
complement-sm
intersection-sm
regexp-to-nfa
run-sm

https://github.com/krampcg23/Finite-Automata
https://www.researchgate.net/publication/269722307_Functional_Automata_-_Formal_Languages_for_Computer_Science_Students
https://arxiv.org/pdf/2008.09254.pdf