async function adviceGenerator() {
    const url = await fetch("https://api.adviceslip.com/advice")
    const generator = await url.json()
    document.getElementById('adviceId').innerHTML = `#${generator.slip.id}`
    document.getElementById('advice').innerHTML = `“${generator.slip.advice}”`
}
export { adviceGenerator }