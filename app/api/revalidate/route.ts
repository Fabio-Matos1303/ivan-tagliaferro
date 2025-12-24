import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token para proteger a rota (configure no Vercel como REVALIDATE_SECRET)
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-token-here'

export async function POST(request: NextRequest) {
  try {
    // Verificar o token de segurança
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Revalidar a página home onde os slides são exibidos
    revalidatePath('/')
    
    // Também revalidar outras páginas que podem usar dados do Sanity
    revalidatePath('/blog')
    revalidatePath('/ebooks')

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: 'Páginas revalidadas com sucesso'
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

