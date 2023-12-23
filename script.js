// levar o array para uma tabela 

jogos.forEach(e => {
    const tbody = document.querySelector("#tbody")

    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdJogo1 = document.createElement("td");
    const tdJogo2 = document.createElement("td");
    const tdjogo3 = document.createElement("td");
    const tdJogo4 = document.createElement("td");
    const tdJogo5 = document.createElement("td");
    const tdJogo6 = document.createElement("td");

    tdName.innerText = e.name;
    tdJogo1.innerText = e.jogo1;
    tdJogo2.innerText = e.jogo2;
    tdjogo3.innerText = e.jogo3;
    tdJogo4.innerText = e.jogo4;
    tdJogo5.innerText = e.jogo5;
    tdJogo6.innerText = e.jogo6;

    tr.appendChild(tdName);
    tr.appendChild(tdJogo1);
    tr.appendChild(tdJogo2);
    tr.appendChild(tdjogo3);
    tr.appendChild(tdJogo4);
    tr.appendChild(tdJogo5);
    tr.appendChild(tdJogo6);

    tbody.appendChild(tr);

})


// ativar o botao, quando todos os inputs estiverem preenchidos

/*function trazerResultado() {
    let result1 = parseInt(document.querySelector("#um").value);
    let result2 = parseInt(document.querySelector("#dois").value);
    let result3 = parseInt(document.querySelector("#tres").value);
    let result4 = parseInt(document.querySelector("#quatro").value);
    let result5 = parseInt(document.querySelector("#cinco").value);
    let result6 = parseInt(document.querySelector("#seis").value);



    if (isNaN(result1) || isNaN(result2) || isNaN(result3) || isNaN(result4) || isNaN(result5) || isNaN(result6) ||
        result1 < 1 || result2 < 1 || result3 < 1 || result4 < 1 || result5 < 1 || result6 < 1 ||
        result1 > 60 || result2 > 60 || result3 > 60 || result4 > 60 || result5 > 60 || result6 > 60) {
        alert("Favor preencher os números sorteados!")
        return;

    }

    // Filtrar linhas com dois ou mais números iguais
    const numerosDigitados = [result1, result2, result3, result4, result5, result6];

    const linhasComDoisOuMaisIguais = jogos.filter(jogo => {
        const numerosJogo = [jogo.jogo1, jogo.jogo2, jogo.jogo3, jogo.jogo4, jogo.jogo5, jogo.jogo6]
        const numerosIguais = numerosDigitados.filter(numero => numerosJogo.includes(numero));
        return numerosIguais.length >= 2;
    });

    linhasComDoisOuMaisIguais.sort ((a, b) => {
    const numerosA = [a.jogo1,a.jogo2,a.jogo3,a.jogo4,a.jogo5,a.jogo6];
    const numerosB = [ b.jogo1, b.jogo2, b.jogo3, b.jogo4, b.jogo5, b.jogo6];
    const acertosA = numerosDigitados.filter(numero =>numerosA.includes(numero)).length;
    const acertosB = numerosDigitados.filter(numero=>numerosB.includes(numero)).length;
     return acertosB - acertosA;
});

const tbody = document.querySelector("#tbody");

linhasComDoisOuMaisIguais.forEach(e=> {
    const tr = tbody.querySelector(`td[data-name="${e.name}"]`);

    if (tr) {
        const tds = tr.querySelectorAll("td");
        tds.forEach(td => {
            const numeroJogo = parseInt(td.innerText);
            if (numerosDigitados.includes(numeroJogo)){
                td.style.backgroundColor = "lightgreen"; 
            }
        });
    }
});*/
function trazerResultado() {
    let result1 = parseInt(document.querySelector("#um").value);
    let result2 = parseInt(document.querySelector("#dois").value);
    let result3 = parseInt(document.querySelector("#tres").value);
    let result4 = parseInt(document.querySelector("#quatro").value);
    let result5 = parseInt(document.querySelector("#cinco").value);
    let result6 = parseInt(document.querySelector("#seis").value);

    if (isNaN(result1) || isNaN(result2) || isNaN(result3) || isNaN(result4) || isNaN(result5) || isNaN(result6) ||
        result1 < 1 || result2 < 1 || result3 < 1 || result4 < 1 || result5 < 1 || result6 < 1 ||
        result1 > 60 || result2 > 60 || result3 > 60 || result4 > 60 || result5 > 60 || result6 > 60) {
        alert("Favor preencher os números sorteados!");
        return;
    }

    // Filtrar linhas com dois ou mais números iguais
    const numerosDigitados = [result1, result2, result3, result4, result5, result6];

    const linhasComDoisOuMaisIguais = jogos.filter(jogo => {
        const numerosJogo = [jogo.jogo1, jogo.jogo2, jogo.jogo3, jogo.jogo4, jogo.jogo5, jogo.jogo6];
        const numerosIguais = numerosDigitados.filter(numero => numerosJogo.includes(numero));
        return numerosIguais.length >= 2;
    });

    // Ordenar por quantidade de acertos em ordem decrescente
    linhasComDoisOuMaisIguais.sort((a, b) => {
        const numerosA = [a.jogo1, a.jogo2, a.jogo3, a.jogo4, a.jogo5, a.jogo6];
        const numerosB = [b.jogo1, b.jogo2, b.jogo3, b.jogo4, b.jogo5, b.jogo6];
        const acertosA = numerosDigitados.filter(numero => numerosA.includes(numero)).length;
        const acertosB = numerosDigitados.filter(numero => numerosB.includes(numero)).length;
        return acertosB - acertosA;
    });

    // Adicionar lógica para alterar a cor de fundo nas células correspondentes
    const tbody = document.querySelector("#tbody");

    linhasComDoisOuMaisIguais.forEach(e => {
        const tr = tbody.querySelector(`tr[data-name="${e.name}"]`);

        if (tr) {
            const tds = tr.querySelectorAll("td");
            tds.forEach(td => {
                const numeroJogo = parseInt(td.innerText);
                if (numerosDigitados.includes(numeroJogo)) {
                    td.style.backgroundColor = "lightgreen"; // Cor de fundo para números iguais
                }
            });
        }
    });

    // Exibir quantidade de acertos na tela
    alert(`Quantidade de acertos em cada jogo:\n${linhasComDoisOuMaisIguais.map(e => `${e.name}: ${numerosDigitados.filter(numero => [e.jogo1, e.jogo2, e.jogo3, e.jogo4, e.jogo5, e.jogo6].includes(numero)).length} acertos`).join('\n')}`);
}
