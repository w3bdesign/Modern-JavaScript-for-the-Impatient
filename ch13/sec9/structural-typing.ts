// ts-node -O '{ "target": "es2020", "strict": true }' structural-typing.ts


// These two types are the same because they have the same structure
{
  type ErrorCode = [number, string]
  type LineItem = [number, string]
  let code: ErrorCode = [404, 'Not found']
  let items: LineItem[] = [[2, 'Blackwell Toaster']]
  items[1] = code
}

// If you use classes, the types become different
{
  type ErrorCode = { code: number, description: string }
  type LineItem = { quantity: number, description: string }
}

// This function accepts any x with walk and quack methods
{
  const act = (x: { walk(): void, quack(): void }) => { x.walk(); x.quack(); }
  class Duck {
    constructor(  ) {    }
    walk(): void { 
      console.log('walking')
   }
    quack(): void { 
      console.log('quacking')
   } 
  }

  // You can pass a Duck instance to act
  const donald = new Duck(  )
  act(donald)

  // You can also pass any object with walk and quack methods
  const daffy = { walk: function () { 
      console.log('daffy walking')
   }, quack: function () { 
      console.log('daffy quacking')
   } };
  act(daffy)
}
