import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'


export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({ request }: HttpContextContract) {
    const body = request.only(["username", "email", "password"]);
    console.log(body);
    await Database
      .table('users')
      .insert(body)
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {
    return await Database
      .from("users")
      .select("*");
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
