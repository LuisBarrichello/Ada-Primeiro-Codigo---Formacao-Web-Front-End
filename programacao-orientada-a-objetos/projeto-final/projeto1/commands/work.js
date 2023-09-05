const {User, users } =  require('../EconoBot.js')

const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trabalhar')
        .setDescription('recebe uma quantia aleatória de dinheiro'),

    async execute(interaction) {
        const userId = interaction.user.id


        if(!users.has(userId)) {
            users.set(userId, new User(userId, interaction.user.username));
        }
        const user = users.get(userId);

        const activity = user.work();

        await interaction.reply(activity);
    }
}
