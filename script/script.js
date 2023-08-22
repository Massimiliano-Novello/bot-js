const API_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-3.5-turbo';
const API_KEY = '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';



const bot = document.querySelectorAll('.image');
const loading = document.querySelector('.loading');

bot.forEach(elem => {
    elem.addEventListener('click', function () {
        clickBot(elem.dataset.image)
    })
})


async function clickBot (nameBot) {
    console.log(nameBot);
    // loading.classList.remove('hidden');
    const action = 'saluta in modo iconico';
    const temperature = 0.7;
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` 
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
                {
                    role: "user",
                    content: `Sei ${nameBot} e ${action} con un massimo di 100 caratteri senza mai uscire dal tuo personaggio`
                }
            ],
            temperature: temperature
        })
    })
    const data = await response.json();
    console.log(data);
}
