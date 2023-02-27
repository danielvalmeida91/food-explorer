const { hash, compare } = require('bcryptjs')
const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const userExists = await knex('users').where('email', email).first()
    console.log(userExists)

    if (userExists) {
      throw new AppError('Este e-mail já está em uso.')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    })

    return response.json({ name, email })
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const id = request.user.id

    const user = await knex('users').where('id', id).first()

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    const userWithEmailUpdated = await knex('users')
      .where('email', email)
      .first()

    if (userWithEmailUpdated && userWithEmailUpdated.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError(
        'É necesário informar a senha antiga para alterar sua senha.'
      )
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError('Senha antiga não confere')
      }

      user.password = await hash(password, 8)
    }

    await knex('users').update(user).where({ id })

    return response.json({ message: 'Usuário atualizado com sucesso!' })
  }
}

module.exports = UsersController
