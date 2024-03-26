
import { redirect } from '@/navigation'
import { AuthForm } from './_components/auth-form'
import { getServerAuthSession } from '@/server/auth'

export default async function Page() {
  const session = await getServerAuthSession()
  if (session) {
    return  redirect('/app')
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <AuthForm />
    </main>
  )
}
