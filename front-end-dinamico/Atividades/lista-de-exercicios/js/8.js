/* 8. Crie uma função chamada `fetchData` que faz uma solicitação HTTP usando fetch e retorna uma promise com os dados obtidos. */

async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erro ao obter os dados.');
        }

        const data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

fetchData('https://exemplo.com/api/dados')
    .then(data => {
        console.log('Dados obtidos:', data);
    })
    .catch(error => {
        console.error('Erro ao obter dados:', error);
    });