function quickSort(array, l, r) {
    function swap(array, l, r) {
        [array[l], array[r]] = [array[r], array[l]]
    }
    function _partition(array, l, r) {
        const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
        
        swap(array, l, randomIndex)
        
        const v = array[l]
        
        let i = l + 1
        let j = r
        
        while (1) {
            while (i <= r && array[i] < v) i++
            while (j >= l + 1 && array[j] > v) j--
            if (i > j) break
            swap(array, i, j)
            i++
            j--
        }
        
        swap(array, l, j)
        
        return j
    }
    
    if (l >= r) {
        return
    }
    
    const j = _partition(array, l, r)
    quickSort(array, l, j - 1)
    quickSort(array, j + 1, r)
}

const size = 1000000
const array = new Array(size).fill(0).map(() => Math.floor(Math.random() * size))

quickSort(array, 0, size)

let res = true

for (let i = 1; i < size; i++) {
    if (array[i] < array[i - 1]) {
        res = false
        break
    }
}

console.log(res)
