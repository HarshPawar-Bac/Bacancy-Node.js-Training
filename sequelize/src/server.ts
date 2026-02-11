import express from 'express'
import {sequelize} from './config/database'

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.error("Unable to connect:", err));


app.get('/', (req, res) => {
    res.json({message: 'Server is up and running!'})
})

app.listen(3000, ()=> {
    console.log('Server is running on PORT 3000')
})