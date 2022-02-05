export function fsm(states: Set<TAlphabet>, transitions: Map<typeof states.values, string>, initial: any, final: any): void {
  states.values
  transitions.get(states.get)
  initial
  final
}

let temp = {
  data: {
    stack: [],
  },
  states: {
    'A': {                                // state A
      Label: 'A',
      transitions: {
        'a': {                            // event a
          goto: ['B', 'C'],               // new states
          if: (data) => {},               // condition
          trigger: (data) => {},          // trigger a function
        },
        'b': {
          goto: {
            'E': {
              trigger: (data) => {},      // per branch trigger
              if: (data) => {},           // per branch condition
            },
            'F': {},                      // normal
          },
        },
        epsilon: {
          goto: 'D'                       // new state
        },
        default: {
          goto: null                      // no next state
        }
      },
      onEnter: (data) => {},              //
      onExit: (data) => {},               //
      final: true,                        // is final state
    },
    'B': {

    }
  },
  initial: 'B',                           // initial state
}
