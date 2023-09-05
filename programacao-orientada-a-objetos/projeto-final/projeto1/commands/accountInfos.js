const {User, users } =  require('../EconoBot.js')

const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('conta')
        .setDescription('exibe informaçoes sobre a conta do usuario, incluindo quando dinheiro ele tem'),

    async execute(interaction) {
        const userId = interaction.user.id


        if(!users.has(userId)) {
            users.set(userId, new User(userId, interaction.user.username));
        }
        const user = users.get(userId);

        const activity = user.accountInfos();

        await interaction.reply(activity);
    }
}
