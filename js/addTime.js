const frmTime = document.querySelector("#formTime")
const times = []

frmTime.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeTime = frmTime.time.value

    times.push(nomeTime)

    console.log(times)
})