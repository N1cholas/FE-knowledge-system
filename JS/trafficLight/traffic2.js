const traffic2 = document.getElementById('v2')

const trafficStates = [
    { state: 'pass', duration: 5000 },
    { state: 'wait', duration: 1500 },
    { state: 'stop', duration: 3500 }
]

function loop2 (traffic, states) {
    function update(i) {
        const { state, duration } = states[i % states.length]

        traffic.className = `traffic ${state}`

        setTimeout(update.bind(null, i + 1), duration)
    }

    update(0)
}

loop2(traffic2, trafficStates)
