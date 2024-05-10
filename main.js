document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const data1 = new Date(document.getElementById("data1").value);
    const data2 = new Date(document.getElementById("data2").value);

    try {
        const maior = maiorData(data1, data2) ? data1 : data2;
        const intervalo = intervaloDatas(data1, data2);
        const atual = dataAtual();

        document.getElementById("resultado").innerHTML = `
            Maior data: ${maior.toLocaleDateString()}<br>
            Intervalo em dias: ${intervalo}<br>
            Data Atual: ${atual}
        `;
        
        document.getElementById("resultado").classList.remove("error-message");
    } catch (error) {
        document.getElementById("resultado").innerHTML = error.message;
        document.getElementById("resultado").classList.add("error-message");
    }
});

function maiorData(date1, date2) {
    return date1.getTime() > date2.getTime();
}

function intervaloDatas(date1, date2) {
    if (date1.getTime() > date2.getTime()) {
        throw new Error("O primeiro parâmetro deve ser anterior ao segundo.");
    }

    const diff = date2.getTime() - date1.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function dataAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes() < 10 ? "0" + agora.getMinutes() : agora.getMinutes();
    const dia = agora.getDate() < 10 ? "0" + agora.getDate() : agora.getDate();
    const mes = agora.getMonth() + 1 < 10 ? "0" + (agora.getMonth() + 1) : agora.getMonth() + 1;
    const ano = agora.getFullYear();

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}
