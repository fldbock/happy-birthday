import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(4)
})

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (user && await bcrypt.compare(password, user.password)) {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: user.name
      }
    })
    return {}
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials'
  })
})
