import { ErrorRequestHandler } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const status = err.status
  const message = err.message

  res.status(400).json({ status, message })
}

export default errorHandler
