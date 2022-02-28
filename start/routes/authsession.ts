import User from 'App/Models/User'
import Route from '@ioc:Adonis/Core/Route'
import Hash from '@ioc:Adonis/Core/Hash'

Route.post('login', async ({ auth, request, response }) => {
  const user = request.only(["username", "email", "password"]);
  const email = body[1]
  console.log(body)
  console.log(request)
  console.log(response)
  // Lookup user manually
  const user = await User
    .query()
    .where('email', email)
    .where('tenant_id', getTenantIdFromSomewhere)
    .whereNull('is_deleted')
    .firstOrFail()

  // Verify password
  if (!(await Hash.verify(user.password, password))) {
    return response.badRequest('Invalid credentials')
  }

  // Create session
  await auth.use('web').login(user)
})