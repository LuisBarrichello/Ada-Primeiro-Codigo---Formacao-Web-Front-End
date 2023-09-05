const {User, users } =  require('../EconoBot.js')

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = {
    data: {
        name: 'transfermoney', // O nome do comando
        description: 'Transfere dinheiro para outro usuário.',
    },
    execute(interaction) {
        client.on('messageCreate', (message) => {
            const conteudo = message.content;
            const autor = message.author;
        
            if (conteudo.startsWith('!transferir')) {
                message.channel.send('Em desenvolvimento')

                /* const args = conteudo.split(' ');
                if (args.length === 3) {
                    const valor = parseFloat(args[1]);
                    const destinatario = args[2];
        
                    if (!isNaN(valor) && valor > 0) {
                        // Verifica se o destinatário existe nos usuários
                        if (users.has(destinatario)) {
                            const remetente = users.get(autor.id);
                            const destinatarioUser = users.get(destinatario);
        
                            if (remetente.monetaryCapital >= valor) {
                                remetente.withdraw(valor);
                                destinatarioUser.deposit(valor);
                                message.channel.send(`Transferência bem-sucedida de ${valor} para ${destinatario}`);
                            } else {
                                message.channel.send('Você não tem saldo suficiente para essa transferência.');
                            }
                        } else {
                            message.channel.send('Destinatário não encontrado.');
                        }
                    } else {
                        message.channel.send('Formato inválido. Use: !transferir [valor] [usuário]');
                    }
                } else {
                    message.channel.send('Formato inválido. Use: !transferir [valor] [usuário]');
                } */
            }
        });
    },
};

