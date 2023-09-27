const UserModel = require('../models/usersModels')

const usersController = { 
    createUser: async(request, response) => {
        
        const newUser = new UserModel(request.body)
        // console.log(newUser);
        const userCreated = await newUser.save()
        // console.log(userCreated)
        response.json({message: `Success! User created with id: ${userCreated.id}`});
      },
      readUser: (request, response) => {
        response.json({message: 'read user..'});
      },
      readAllUsers: (request, response) => {
        response.json({message: 'real all Users..'});
      },
      updateUser: (request, response) => {
        response.json({message: 'update user...!!'});
      },
      deleteUser: (request, response) => {
        response.json({message: 'delete user...'});
      },
}

module.exports = usersController