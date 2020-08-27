const reverse = a => {
  const result = []
  for (let i = a.length - 1; i >= 0; i--) result.push(a[i])
  return result;
}

const nextPermutation = a => {
  if (a.length <= 1) return undefined; 
  for (let i = a.length - 1; i > 0; i--)
  {
    if (a[i - 1] < a[i])
    {
      let j = a.length - 1;
      while (a[i - 1] > a[j]) j--;
      console.log({i,j})
      return [...a.slice(0, i - 1), a[j], ...reverse([...a.slice(i, j), a[i - 1], ...a.slice(j + 1, a.length)])]
    }
  }
  return undefined;
}
