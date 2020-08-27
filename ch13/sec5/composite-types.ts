// ts-node -O '{ "target": "es2020", "strict": true }' composite-types.ts

type ArrayStartingWithNumberAndString = [string, number, ...unknown[]]
type Point = { x: number, y: number }
const distanceFromOrigin = (p: Point) => Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2))
type NumericFunctionConsumingTwoNumbers = (arg1: number, arg2: number) => number

// An intersection type
type ColoredPoint = Point & { color: string }
