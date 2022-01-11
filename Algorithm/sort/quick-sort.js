const quickSort = (array, l, r) => {
    if (l >= r) {
        return
    }
    
    function swap(array, l, r) {
        const temp = array[l]
        array[l] = array[r]
        array[r] = temp
    }
    
    const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
    
    swap(array, l, randomIndex)
    
    const v = array[l]
    
    let lt = l     // array[l + 1...lt] < v
    let gt = r + 1 // array[gt...r] > v
    let i = l + 1  // array[lt + 1...i) < v
    
    while(i < gt) {
        if (array[i] < v) {
            swap(array, i, lt + 1)
            i++
            lt++
        } else if (array[i] > v) {
            swap(array, i, gt - 1)
            gt--
        } else {
            i++
        }
    }
    
    swap(array, l, lt)
    
    quickSort(array, l, lt - 1)
    quickSort(array, gt, r)
}

const size = 1000000
const array = new Array(size).fill(0).map(() => Math.floor(Math.random() * size))

quickSort(array, 0, size - 1)

let res = true

for (let i = 1; i < size; i++) {
    if (array[i] < array[i - 1]) {
        res = false
        break
    }
}

console.log(res)
