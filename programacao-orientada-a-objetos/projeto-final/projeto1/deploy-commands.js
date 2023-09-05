const { REST, Routes } = require('discord.js')



//dotenv
const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env



//importacao comandos
const fs = require('node:fs')
const path = require('node:path')

const commands = []

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath)
.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

//isntacia rest
const rest = new REST().setToken(TOKEN);


(async () => {
    try {
        console.log(`Iniciada a atualização dos comandos do aplicativo ${commands.length} (/).`)

        //O método put é usado para atualizar completamente todos os comandos da guild com o conjunto atual
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands},
        )

        console.log(`Comandos do aplicativo ${data.length} (/) recarregados com sucesso.`)
    } catch (error) {
        console.error(error);
    }
})();