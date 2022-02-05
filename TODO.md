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
