import Route from '@ioc:Adonis/Core/Route'

Route.post('/register/submit', "UsersController.create");

Route.get('/login', async () => {
    return { hello: 'login page' }
  });

Route.post('/register/test', async ({ request }) => {
  console.log(request.url())
});

Route.get('/users/list', "UsersController.show");

//Route.post('/user/login', async ({ auth, request }) => {
//  const email = request.input('email')
//  const password = request.input('password')
//
//  await auth.use('web').attempt(email, password)
//  console.log(auth.user!)
//})