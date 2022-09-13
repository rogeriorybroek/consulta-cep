const inputCep = document.querySelector('#cep')
const inputLogradouro = document.querySelector('#logradouro')
const inputBairro = document.querySelector('#bairro')
const inputCidade = document.querySelector('#cidade')
const inputEstado = document.querySelector('#estado')
const inputIbge = document.querySelector('#ibge')
const divInfo = document.querySelector('#div-info')
const spinner = document.querySelector('#spinner')


inputCep.onblur = function(e) {
    const cepValue = e.target.value
    const span = e.target.nextSibling.nextSibling

    if(!cepValue) {
        span.innerText = 'Digite o CEP'
    } else if (cepValue.length !== 8) {
        span.innerText = 'Digite um CEP válido'
    } else {
        span.innerText = ''
    }

    const url = `https://viacep.com.br/ws/${cepValue}/json/`
    fetch(url)
        .then(response => response.json())
        .then(montarNaTela)
        .catch(exibirErro)
}

function montarNaTela(dados) {
    const { 
    logradouro, 
    bairro, 
    cidade,
    estado, 
    ibge } = dados

    spinner.classList.remove('hidden')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            spinner.classList.add('hidden')
            resolve(divInfo.classList.remove('hidden'), form.classList.add('active'))
        }, 3000)
        
        inputLogradouro.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEstado.value = dados.uf
        inputIbge.value = dados.ibge
    })
}

function exibirErro() {
    divInfo.classList.add('hidden')
}

