'use server'

import ApiRoute from '@/data/apiRoute'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'

export async function DeleteCategory(id: number) {
  try {
    const cookiesStore = cookies()
    const token = cookiesStore.get('token')

    const response = await ApiRoute(`/category/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
    })
    revalidateTag('category')
    if (!response.ok) return false
    return true
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 401,
    })
  }
}
