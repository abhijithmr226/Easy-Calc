export type UnitConversion = {
  from: string;
  to: string;
  formula: (value: number) => number;
};

export type UnitCategory = {
  name: string;
  units: string[];
  conversions: UnitConversion[];
};

export const unitCategories: UnitCategory[] = [
  {
    name: 'Length',
    units: ['meters', 'kilometers', 'miles', 'feet'],
    conversions: [
      {
        from: 'meters',
        to: 'kilometers',
        formula: (m) => m / 1000
      },
      {
        from: 'meters',
        to: 'miles',
        formula: (m) => m / 1609.344
      },
      {
        from: 'meters',
        to: 'feet',
        formula: (m) => m * 3.28084
      }
    ]
  },
  {
    name: 'Temperature',
    units: ['Celsius', 'Fahrenheit', 'Kelvin'],
    conversions: [
      {
        from: 'Celsius',
        to: 'Fahrenheit',
        formula: (c) => (c * 9/5) + 32
      },
      {
        from: 'Celsius',
        to: 'Kelvin',
        formula: (c) => c + 273.15
      }
    ]
  }
];