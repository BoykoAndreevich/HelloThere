const express = require('express');
const router = require('./router');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-users-v1.json');
const app = express();

const OpenApiValidator = require('express-openapi-validator');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(
    OpenApiValidator.middleware({
      apiSpec: './swagger-users-v1.yaml',
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    })
  );

app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

app.use('/', router);
app.listen(9000, function(){
    console.log('Server on port 9000');
});