const { print, prompt } = require('gluegun')
require('../../config/db')
const Users = require('../../models/users.model')
const moment = require('moment')
const _ = require('lodash')

module.exports = {

  name: 'create-user',
  alias: 'c',
  
  run: async toolbox => {

    const askFirstname = { 
      type: 'input', 
      name: 'firstname', 
      message: 'Primeiro nome: ' 
    }

    const askLastname = { 
      type: 'input', 
      name: 'lastname', 
      message: 'Sobrenome: ' 
    }

    const askBirthdate = { 
      type: 'input', 
      name: 'birthdate', 
      message: 'Data de nascimento:' 
    }

    const questions = [
      askFirstname,
      askLastname,
      askBirthdate
    ]

    const {
      firstname,
      lastname,
      birthdate
    } = await prompt.ask(questions)



    const user = new Users({
      firstname,
      lastname,
      birthdate: moment(
        birthdate, 
        ["DD-MM-YYYY", "YYYY-MM-DD"], 
        'pt-br', 
        true
      )
    })

    user.save( (err, user) => {
      if(err) {
        print.info(err)
      }
      else {
        print.success('Usuário criado com sucesso.')
        print.success(user)
      }

    })
  
  }

}
