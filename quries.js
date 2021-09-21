const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '1q2w3e4r5t',
  port: 5432,
});

var controller = {
  createUser: function (request, response) {
    const { name, email, phone, password } = request.body;
    console.log(request.body);
    pool.query('INSERT INTO public.register_details (name, email, phone, password) VALUES ($1, $2, $3, $4)', [name, email, phone, password], function(error, results) {
      if (error) {
        throw error
      }
      return response.send("welcomes " + name);
      // console.log(results.rows);
      // console.log(response.send);
    });

  }
}

module.exports = controller;
console.log(controller.createUser)


