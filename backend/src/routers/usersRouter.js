const { Router } = require('express')
const usersController = require('../controllers/usersController')

const router = Router()

// CRUD = Create, Read, Update, Delete

router.post('/', usersController.createUser);       // para crear
router.get('/:id', usersController.readUser);        // para leer
router.get('/', usersController.readAllUsers);        // para leer varios
router.put('/:id', usersController.updateUser);        // para actualizar
router.delete('/:id', usersController.deleteUser);     // para eliminar


module.exports = router

// localhost:4000