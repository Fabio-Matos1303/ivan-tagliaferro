/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { projectId } from '../../../sanity/env'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  // Verificar se o Sanity está configurado
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId === 'placeholder') {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">Sanity Studio não configurado</h1>
          <p className="text-gray-300 mb-6">
            Para usar o Sanity Studio, você precisa configurar as variáveis de ambiente.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg text-left">
            <p className="text-sm text-gray-400 mb-4">Crie um arquivo <code className="bg-gray-700 px-2 py-1 rounded">.env.local</code> na raiz do projeto com:</p>
            <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-11-02`}
            </pre>
            <p className="text-sm text-gray-400 mt-4">
              Após configurar, reinicie o servidor de desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return <NextStudio config={config} />
}
