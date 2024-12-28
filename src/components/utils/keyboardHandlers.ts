// Map keyboard keys to calculator operations
export const mathKeyMap = {
  // Numbers and decimal
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '.': '.',
  
  // Operations
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  '^': 'square',
  
  // Control keys
  'Enter': '=',
  '=': '=',
  'Escape': 'clear',
  'Backspace': 'backspace',
  'Delete': 'clear'
} as const;

export type MathKey = keyof typeof mathKeyMap;
export type MathOperation = typeof mathKeyMap[MathKey];