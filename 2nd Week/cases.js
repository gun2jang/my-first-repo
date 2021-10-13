
const factorial = (n) => {
    let f = []
    if (n == 0 || n == 1)
        return 1
    if (f[n] > 0)
        return f[n]
  return f[n] = factorial(n-1) * n
}
const permutation =  (n, r) => factorial(n)/factorial(n-r)
const combination = (n, r) => factorial(n)/(factorial(n-r)*factorial(r))
const multiPermutation = (n, r) => Math.pow(n, r)
const multiCombination = (n, r) => combination(n+1-r,r)

module.exports={
    permutation : permutation,
    combination : combination,
    multiPermutation: multiPermutation,
    multiCombination : multiCombination
}