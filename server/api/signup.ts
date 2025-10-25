import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const bodySchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(4)
})

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { email, name, password } = await readValidatedBody(event, bodySchema.parse)

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      }
    })
    await setUserSession(event, {
      user: {
        name: name
      }
    })
  return {}
  } catch (e) {
    console.error('Error creating user:', e)
    throw createError({
      statusCode: 401,
      message: 'User already exists'
    })
  }
})
