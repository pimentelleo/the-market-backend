import Route from '@ioc:Adonis/Core/Route'

Route.post('/register/submit', "UsersController.create");

Route.get('/login', async () => {
    return { hello: 'login page' }
  });

Route.post('/register/test', async ({ request }) => {
  console.log(request.url())
});