// Helper for returning a unique string.
function unique() {
  let x = new Date().getTime()
  x = `${x}_`
  x += Math.random()
  x = x.replace('0.', '')

  return x
}

// Expose function.
export default unique
