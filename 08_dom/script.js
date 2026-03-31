const form = document.getElementById('form-inspecao')
const mensagem = document.getElementById('mensagem')
const validacao = document.getElementById('validacao')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const setor = document.getElementById('setor').value
    const descricao = document.getElementById('descricao').value.trim()
    const prioridade = document.querySelector('input[name = "prioridade"]:checked')
    const termos = document.getElementById('termos').checked
    
    if (nome ===''){
        mensagem.textContent = 'preencha o nome.'
        return
    }

    if (email ===''){
        mensagem.textContent = 'preencha o e-mail.'
        return
    }

    if (setor === ''){
        mensagem.textContent = 'preencha o setor.'
        return
    }

    if (!prioridade){
        mensagem.textContent = 'selecione uma prioridade.'
        return
    }

    if (descricao.length < 10){
        mensagem.textContent = 'A descrição deve ter pelo menos 10 caracteres';
        return;
    }

    if (!termos){
        mensagem.textContent = 'Marque a confirmação dos dados.';
        return;
    }
    mensagem.remove()
    validacao.textContent = 'fomulário validado com sucesso.'
})