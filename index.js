function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)

}

function setThisWithApply(fn, thisValue, args) {
  return fu.apply(thisValue, args)

}
