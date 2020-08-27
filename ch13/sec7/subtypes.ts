// ts-node -O '{ "target": "es2020", "strict": true }' subtypes.ts


type Point = { x: number, y: number }
// This is not a Point
const bluePoint = { x: 3, y: 4, color: 'blue' }
// It is an instance of this type
type ColoredPoint = { x: number, y: number, color: string }

// Subtyping rule: Ok to pass an instance of subtype
const distanceFromOrigin = (p: Point) => Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2))
let result = distanceFromOrigin(bluePoint) // OK
// But can't pass an instance of a subtype literal
/* Compile-time error
result = distanceFromOrigin({ x: 3, y: 4, color: 'blue' }) // Error
*/

// Excess property check
/* Compile-time error
let p: Point = { x: 3, y: 4 }
p = { x: 0, y: 0, color: 'red' } // Error—excess property blue
*/

let p: Point = { x: 3, y: 4 }
// Remedy: Another variable
const redOrigin = { x: 0, y: 0, color: 'red' }
p = redOrigin // OK—p can hold a subtype value

// Can't read a property that doesn't belong to a type
/* Compile-time error
const getPoint = () => Math.random() < 0.5 ? 
  { x: Math.random(), y: Math.random() } : { 0, 0, 'red' }
/* Compile-time error   
let p: Point = getPoint()
console.log(p.color) // Error—no guarantee that there is such a property
*/

// Can't write to it either!
/* Compile-time error   
p.color = 'blue' // Error—no such property
*/

// Remedy: Optional property
type MaybeColoredPoint = {
  x: number,
  y: number,
  color?: string
}

// These are all ok
{
    let p: MaybeColoredPoint = { x: 0, y: 0 } // OK—color optional
    p.color = 'red' // OK—can set optional property
    p = { x: 3, y: 4, color: 'blue' } // OK—can use literal with optional property
}

// Excess property checks are meant to catch typos
const plot = (p: MaybeColoredPoint) => console.log('Plotting ', p)
/* Compile-time error
const result = plot({ x: 3, y: 4, colour: 'blue' })
  // Error—excess property colour
*/

// Unsound convertion from subtype array to supertype array
const coloredPoints: ColoredPoint[] = [{ x: 3, y: 4, color: 'blue' }, 
                                       { x: 0, y: 0, color: 'red' }]
const points: Point[] = coloredPoints // OK for points to hold a subtype value
// Clearly this is ok because of the substitution rule
points.push({ x: 4, y: 3 }) // OK to add a Point to a Point[]
// But it causes a runtime error
try {
  console.log(coloredPoints[2].color.length) 
  // Error—cannot read property 'length' of undefined
} catch (exception) {
  console.log('Error:', exception.message) // Cannot read property 'length' of undefined
}

// Covariance also used for object types
type Colored = { color: string }
type MaybeColored = { color: string | undefined }
