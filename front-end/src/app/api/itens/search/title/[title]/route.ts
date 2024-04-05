import ApiRoute from '@/data/apiRoute'
import { NextResponse } from 'next/server'

export async function GET(
  _: Request,
  { params }: { params: { title: number; page: number } },
) {
  try {
    const title = params.title
    const page = params.page

    const response = await ApiRoute(`/itenst/${title}?page=${page}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60,
      },
    })

    const data = await response.json()
    return NextResponse.json({ data })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 401,
    })
  }
}
