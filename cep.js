function searchCep() {
    event.preventDefault()

    let cep = document.getElementById('cep').value

    axios.get(`http://api.postmon.com.br/v1/cep/${cep}`)
        .then(response => {
            showResults(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function showResults(address) {
    resultado = document.getElementById('results')

    resultado.style.display = 'block'
    resultado.innerHTML = `
        <p><b>Bairro: </b> ${address.bairro} </p
        <p><b>Cidade: </b> ${address.cidade} </p
        <p><b>Logradouro: </b> ${address.logradouro} </p
        <p><b>Cep: </b> ${address.cep} </p
    `
}