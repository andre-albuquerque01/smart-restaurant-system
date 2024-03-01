import ApiRoute from '@/data/apiRoute'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()

    const cookiesStore = cookies()

    const response = await ApiRoute('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const data = await response.json()
    console.log(data)

    cookiesStore.set('token', data.data.token, {
      expires: Date.now() + 2 * 60 * 60 * 1000,
      secure: true,
    })
    if (data.data.r === 'JesusIsKingADM') {
      cookiesStore.set('r', data.data.r, {
        expires: Date.now() + 2 * 60 * 60 * 1000,
        secure: true,
      })
    }

    if (data.message === 'erro') {
      return new Response(JSON.stringify({ error: 'Error', status: 400 }), {
        status: 400,
      })
    } else {
      return Response.json({ sucess: 'sucess' })
    }
  } catch (error) {
    console.log('Erro ao analisar JSON:', error)
  }
}
