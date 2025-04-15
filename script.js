const messages = {
    22: "Oi, meu amor. Sei que hoje começou nossa contagem de dias longe, mas queria que soubesse que cada minuto sem você é uma pequena saudade crescendo dentro de mim.",
    23: "Você é o pensamento que me acalma e o sorriso que mora na minha mente. Mesmo distante, você continua sendo a parte mais bonita do meu dia.",
    24: "Hoje imaginei como seria te dar um abraço apertado agora. Talvez não cure a distância, mas só de pensar nisso meu coração aquece.",
    25: "Já são alguns dias sem te ver e meu peito já tá cheio de vontade de te contar mil coisas ao vivo.",
    26: "Cada dia longe de você me mostra o quanto eu te amo. Você é meu lugar seguro, meu cantinho de paz.",
    27: "Último dia longe... finalmente. A saudade me ensinou a valorizar ainda mais cada segundo ao seu lado."
};

// Função para exibir mensagem
function showMessage(dayNum) {
    const messageContent = document.getElementById('message-content');
    const messageBox = document.getElementById('message-box');
    messageContent.innerText = messages[dayNum];
    messageBox.classList.remove('hidden');
    messageBox.setAttribute('aria-hidden', 'false'); // Acessibilidade
}

// Função para fechar mensagem
function closeMessage() {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.add('hidden');
    messageBox.setAttribute('aria-hidden', 'true'); // Acessibilidade
}

// Função para lidar com o clique no dia
function handleDayClick(day) {
    const dayNum = parseInt(day.getAttribute('data-day'));
    const today = new Date();
    const currentDay = today.getDate();

    if (dayNum <= currentDay || currentDay > 27) {
        showMessage(dayNum);
    } else {
        alert(`Essa mensagem só pode ser aberta no dia ${dayNum} de abril 💌`);
    }
}

// Adiciona eventos aos dias
document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => handleDayClick(day));
});

// Adiciona um evento ao botão de fechar a mensagem
document.getElementById('close-button').addEventListener('click', closeMessage);
