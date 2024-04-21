const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
require('dotenv/config');

const client = new OpenAIClient(process.env.GPT_ENDPOINT, 
    new AzureKeyCredential(process.env.GPT_KEY));

const getMessageFromAPI = async (message) => {
    try {
        const response = await client.getCompletions(
            process.env.GPT_MODEL, message, 
            { maxTokens: 50 });
        return response.choices[0].text.trim();
    } catch (error) {
        console.error(error);
        return 'Desculpe, encontrei um erro';
    }
};

const chatBot = async () => {
    console.log('Olá, me chamo Olga sua IA preferida');
    console.log('Digite "tchau" a qualquer momento pra sair');

    while (true) {
        const userMessage = await askQuestion('Faça uma pergunta:');
        
        if (userMessage.toLowerCase() === 'tchau') {
            console.log('Até mais!');
            break;
        }

        const botResponse = await getMessageFromAPI(userMessage);
        console.log(`Olga: ${botResponse}`);
    }

    process.exit(0);
};

const askQuestion = (question) => {
    return new Promise((resolve) => {
        process.stdout.write(question + ' ');
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
};

chatBot().catch((error) => {
    console.error(error);
    process.exit(1);
});