const a = 20

const test = () => {
  const b = a + 10

  const innerTest = () => {
    const c = 10

    console.dir(innerTest)
    console.trace()
    return b + c
  }

  return innerTest()
}

test()
