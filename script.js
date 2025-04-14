const messages = {
    22: "Oi, meu amor. Sei que hoje começou nossa contagem de dias longe, mas queria que soubesse que cada minuto sem você é uma pequena saudade crescendo dentro de mim.",
    23: "Você é o pensamento que me acalma e o sorriso que mora na minha mente. Mesmo distante, você continua sendo a parte mais bonita do meu dia.",
    24: "Hoje imaginei como seria te dar um abraço apertado agora. Talvez não cure a distância, mas só de pensar nisso meu coração aquece.",
    25: "Já são alguns dias sem te ver e meu peito já tá cheio de vontade de te contar mil coisas ao vivo.",
    26: "Cada dia longe de você me mostra o quanto eu te amo. Você é meu lugar seguro, meu cantinho de paz.",
    27: "Último dia longe... finalmente. A saudade me ensinou a valorizar ainda mais cada segundo ao seu lado."
};

document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => {
        const dayNum = parseInt(day.getAttribute('data-day'));
        const today = new Date();
        const currentDay = today.getDate();

        if (dayNum <= currentDay || currentDay > 27) {
            document.getElementById('message-content').innerText = messages[dayNum];
            document.getElementById('message-box').classList.remove('hidden');
        } else {
            alert('Essa mensagem só pode ser aberta no dia ' + dayNum + ' de abril 💌');
        }
    });
});

function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
