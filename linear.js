const values = [1, 2, 4, 6, 12 ,16,19]
values.forEach(value => {
    console.log({ x: value, y: (17.25 + 7.5 * value) })
})