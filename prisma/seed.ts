import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seed() {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash('test', saltRounds);

  await prisma.user.createMany({
    data: [
      { email: 'test@test.com', name: 'Test User', password: hashedPassword }
    ]
  })
}

seed().then( () => prisma.$disconnect() )