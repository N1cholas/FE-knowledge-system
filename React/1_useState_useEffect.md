```js
const effectStack = []

function subscribe(effect, subs) {
subs.add(effect)
effect.deps.add(subs)
}

function cleanup (effect) {
for (const subs of effect.deps) {
subs.delete(effect)
}

effect.deps.clear()
}

function useState(value) {
const subs = new Set()

const getter = () => {
const effect = effectStack[effectStack.length - 1]

    if (effect) {
      subscribe(effect, subs)
    }

    return value
}

const setter = nextValue => {
value = nextValue

    for (const effect of [...subs]) {
      effect.execute()
    }
}

return [getter, setter]
}

function useEffect(callback) {
const execute = () => {
cleanup(effect)

    effectStack.push(effect)

    try {
      // callback 执行的时候 已经有了effect的上下文
      callback()
    } finally {
      effectStack.pop()
    }
}

const effect = {
execute,
deps: new Set()
}

execute()
}

function useMemo(callback) {
const [s, set] = useState()
useEffect(() => set(callback))
return s
}

const [a, set] = useState(0)

console.log(a())

set(1)

console.log(a())

useEffect(() => document.title = a())

set(2)

console.log(a())
```
