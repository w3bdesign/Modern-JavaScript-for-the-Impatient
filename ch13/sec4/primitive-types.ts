// ts-node -O '{ "target": "es2020", "strict": true }' primitive-types.ts


// The undefined type is useful in a union type
type MaybeString = string | undefined

// This type has seven instances:
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

// Now you can annotate a variable with this type:
let w: Weekday = 'Mon' // OK

/* Compile-time error:
w = 'Mo' // Error
*/

// Values can be literals of any type:
type Falsish = false | 0 | 0n | null | undefined | '' | []

// Enumerated types
{
  enum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN }
  console.log('Weekday.MON:', Weekday.MON) // 0
  enum Color { RED = 4, GREEN = 2, BLUE = 1 }
  enum Quarter { Q1 = 'Winter', Q2 = 'Spring', Q3 = 'Summer', Q4 = 'Fall' }
}
