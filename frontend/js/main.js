document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const sName = document.querySelector('input').value.toLowerCase()
    try {
        const response = await fetch(`https://students-api-piyush.herokuapp.com/api/${sName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = `${data.first_name} ${data.last_name} of ${data.address} is a ${data.gender}`
    } catch (error) {
        console.log(error)
    }
}