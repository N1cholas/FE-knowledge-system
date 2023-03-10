const traffic = document.getElementById('v1')

// this function depends on outside variable "traffic1"
const loop = () => {
    setTimeout(() => {
        traffic.className = 'traffic wait'
        setTimeout(() => {
            traffic.className = 'traffic stop'
            setTimeout(() => {
                traffic.className = 'traffic pass'
                loop()
            }, 3500)
        }, 1500)
    }, 5000)
}

loop(traffic)
