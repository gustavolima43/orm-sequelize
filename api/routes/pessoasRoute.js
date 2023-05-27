const { Router } = require('express')
const PessoaController = require('../controlles/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router