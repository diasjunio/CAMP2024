# CAMP2024
ChatBot CLI com OpenAI's GPT
Este é um ChatBot simples de linha de comando, que usa a API GPT da OpenAI para responder às dúvidas dos usuários. O bot recebe informações do usuário por meio do terminal e responde gerado pelo modelo GPT.

Instalação:
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.
Clone este repositório ou baixe os arquivos diretamente.

Biblioteca:
@azure/openai


Uso:
Para iniciar o ChatBot, execute o seguinte comando no terminal: node index.js

O ChatBot será iniciado e você poderá interagir com ele digitando suas perguntas ou mensagens. Para sair do ChatBot, basta digitar "tchau" e pressionar Enter.

Funcionamento:
O ChatBot aguarda a entrada do usuário por meio de um endpoint e envia essa entrada para a API GPT da OpenAI para obter uma resposta. A resposta será então exibida no terminal.

Se ocorrer um erro ao obter a resposta, o ChatBot exibirá uma mensagem de erro e continuará aguardando a nova entrada do usuário.
