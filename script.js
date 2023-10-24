
document.querySelector("body").addEventListener("keydown", () => {
    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
        model: "ft:gpt-3.5-turbo-0613:zeros-e-um::8DDHyrh4",
        messages: [
            {
                role: "system",
                content: "Jarvis é um chatbot pontual e muito simpático que ajuda as pessoas",
            },
            {
                role: "user",
                content: "Quais opções de cursos o SENAI-SP tem em São Paulo?",
            },
        ],
        temperature: 0.7,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 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",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na requisição: " + response.status);
            }
           response.json().then((data)=>{
                const div = document.createElement("div")
                div.innerText = data.choices[0].message.content
                document.querySelector(".container").append(div)
           })
        })
        .catch((error) => {
            console.error("Erro:", error);
        });

})