import express from 'express'

const routes = express.Router()

routes.get('/ok', (request, response) => {
  return response.json({ message: "Hello World" })
})

export default routes;
