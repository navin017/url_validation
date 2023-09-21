const express = require('express')
const router = express.Router()
const app = express()
const validate = require('./response')

router.post('/abc', validate.validateParams([
    {
        param_key: 'abc',
        required: true,
        type: 'string',
        validator_functions: [(param) => {return param.length === 10}]
    }]),app);

    const server = app.listen(8000, function () {
        console.log("listening to the port %s .....", server.address().port);
    })
// const { query, validationResult } = require('express-validator');
// const validateQueryParams = [
//   query('id').notEmpty().withMessage('ID is required'),
//   query('id').isInt().withMessage('ID must be an integer'),
// ];
// app.get('/api/resource', validateQueryParams, (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const id = req.query.id;
  
//   res.json({ message: `Received valid ID: ${id}` });
// });
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });