/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
/* MY OWN ROUTES */
import './routes/users'
import './routes/authsession'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/aboutme', async () => {
  return {
    greeting: "Hi! I guess it's better talk about me in a json, sup? :p",
    aboutMe: "I call myself an digital highlander, i past last years walking alone here and doing nasty tech stuff on my house",
    email: "leonardociberxon@gmail.com",
    linkedin: "https://www.linkedin.com/in/leonardo-araujo-pimentel-26619972/",
    mobileNumber: "+5571988889706",
    reminder: "If you seeing this on your web browser, ya you doing right"
  };
})
