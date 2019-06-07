export default {
  handleInput
}

function handleInput(setter) {
  return e => setter(e.target.value)
}