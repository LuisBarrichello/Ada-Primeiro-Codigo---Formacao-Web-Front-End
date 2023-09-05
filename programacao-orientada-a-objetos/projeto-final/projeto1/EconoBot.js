class User {
    static userQuantity = 0
    constructor(id, username) { 
        this.id = id;
        this.username = username;
        this.monetaryCapital = 0;
        this.cooldown = 0;
        User.userQuantity++;
    }

    work() {
        if(this.cooldown <= 0) {
            const money = Math.floor(Math.random() * 100)
            this.monetaryCapital += money;

            /* this.cooldown = 60;
            this.cooldown = setInterval(() =>{
                if (this.cooldown > 0) {
                    this.cooldown--;
                } else {
                    clearInterval(this.intervalo);
                }
                this.cooldown;
            }, 1000) */
            
            return `Você trabalhou e ganhou ${money} moedas.`;
        } else {

        }
    }

    //conta
    accountInfos() {
        return `Sua conta Id(${this.id}), e você possui ${this.monetaryCapital}`
    }

    withdraw(value) {
        if (value > this.monetaryCapital) {
            return 'You do not have enough funds in your account';
        }
        value = Number(value)
    
        const amountWithdrawn = this.monetaryCapital -= value;
        return amountWithdrawn
    }
    

    deposit(value) {
        value = Number(value)

        const valueDeposited = this.monetaryCapital += value;
        return valueDeposited
    }

    transferMoney(value, accountDestination)  {
        if(users.has(accountDestination.username)) {
            accountDestination.monetaryCapital.deposit(Number(value))
            this.withdraw(value)
        }

        return `a conta ${accountDestination.username} recebeu ${value}`;
    }

    toBet() {

    }
}

const users = new Map(); // Map para manter o registro de usuários
module.exports = { User, users };