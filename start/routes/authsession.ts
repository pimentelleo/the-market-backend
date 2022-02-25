import Route from '@ioc:Adonis/Core/Route'

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(email, password)
    response.redirect('/dashboard')
  } catch {
    return response.badRequest('Invalid credentials')
  }
})