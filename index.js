const express = require('express') //instanciando express

const app = express()// instaciar aplicação

app.get('/',(req,res)=>{
    res.send('MENSAGEM')
})

app.listen(3001, () => {
    console.log('Server up na porta 3000, ctrl + c para cancelar')
}) //passar por parametro a porta 3001

