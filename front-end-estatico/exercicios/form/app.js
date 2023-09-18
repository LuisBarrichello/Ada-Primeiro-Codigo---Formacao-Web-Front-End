const fileInput = document.getElementById('foto_perfil');

console.log(fileInput.type)

fileInput.addEventListener('change', (e) => {
    const selectedFile = e.target.files[0];
    
    if(selectedFile) {
        const fileType = selectedFile.type;
        if(fileType !== 'image/png') {
            alert('Tipo de arquivo não suportado. Selecione um arquivo PNG.');
        } else {
            alert('Nenhum arquivo selecionado.');
        }
    }
})

console.log(2+2);
