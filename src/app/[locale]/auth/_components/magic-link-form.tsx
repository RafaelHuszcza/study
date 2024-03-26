'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { ErrorMessage } from '@/components/error-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export function MagicLinkForm() {
  const t = useTranslations('auth.components.magic-link-form')
  const formSchema = z.object({
    email: z.string().email({ message: t('z.invalid-email') }),
  })

  type FormData = z.infer<typeof formSchema>
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = form
  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
      toast.success(t('toast.success.title'), {
        description: t('toast.success.description'),
      })
    } catch (error) {
      toast.error(t('toast.error.title'), {
        description: t('toast.error.description'),
      })
    }
  })

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">{t('label')}</Label>
        <Input
          id="email"
          placeholder={t('email-placeholder')}
          type="email"
          {...register('email')}
        />
        <ErrorMessage errors={errors} name="email" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          t('submit-button')
        )}
      </Button>
    </form>
  )
}
