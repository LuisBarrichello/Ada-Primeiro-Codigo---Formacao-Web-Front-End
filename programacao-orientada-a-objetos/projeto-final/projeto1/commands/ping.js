const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com Pong!'),
    
    //A palavra-chave async é usada antes de uma função para indicar que ela é assíncrona e pode realizar operações demoradas sem bloquear a execução do código.
    //await é usada dentro de uma função assíncrona para pausar a execução até que uma operação assíncrona seja concluída, tornando o código mais sequencial e fácil de entender.
    async execute(interaction) {
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true })
    }
}
