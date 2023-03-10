const traffic3 = document.getElementById('v3')

function loop3(trafficEle, states, cb) {
    function update(i) {
        const { state, duration } = states[i % states.length]

        cb(trafficEle, state)

        setTimeout(update.bind(null, i + 1), duration)
    }

    update(0)
}

loop3(traffic3, trafficStates, (ele, state) => ele.className = `traffic ${state}`)
