'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useId, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'

type FieldName = 'name' | 'email' | 'number' | 'company' | 'message'
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!PHONE_RE.test(values.number.trim())) errors.number = 'Please enter a valid phone number.'
  if (values.message.trim().length < 10) errors.message = 'Tell us a little more about the project.'
  return errors
}

const initial: Record<FieldName, string> = { name: '', email: '', number: '', company: '', message: '' }

export default function ContactForm() {
  const reduce = useReducedMotion()
  const id = useId()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const honeypot = useRef<HTMLInputElement>(null)

  const fieldId = (name: FieldName) => `${id}-${name}`
  const errorId = (name: FieldName) => `${id}-${name}-error`

  const update = (name: FieldName) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
  }

  const blur = (name: FieldName) => () => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, number: true, message: true })
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0] as FieldName
      document.getElementById(fieldId(first))?.focus()
      return
    }

    setStatus('submitting')
    setServerMessage(null)
    try {
      const res = await fetch('/api/sendForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website: honeypot.current?.value ?? '' }),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string; errors?: Errors }
      if (!res.ok) {
        if (json.errors) setErrors(json.errors)
        setServerMessage(
          res.status === 503
            ? 'Our inbox is temporarily unavailable. Please email us directly and we will reply promptly.'
            : json.error ?? 'Something went wrong. Please try again or email us directly.',
        )
        setStatus('error')
        return
      }
      setStatus('success')
      setValues(initial)
      setTouched({})
    } catch {
      setServerMessage('We could not reach the server. Check your connection and try again, or email us directly.')
      setStatus('error')
    }
  }

  const showError = (name: FieldName) => Boolean(touched[name] && errors[name])

  if (status === 'success') {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[28rem] flex-col justify-center rounded-lg border border-line bg-surface p-8 md:p-12"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="m4 10.5 4 4 8-9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-8 text-h3">Thank you. Your message is on its way.</h2>
        <p className="mt-4 max-w-[44ch] text-body text-fg-muted">
          We read every inquiry personally and will get back to you shortly. If it is urgent, call or message us on
          WhatsApp.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="link-underline mt-8 self-start text-small">
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-7" aria-describedby={`${id}-form-hint`}>
      <p id={`${id}-form-hint`} className="sr-only">
        All fields except company are required.
      </p>

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="field">
          <label htmlFor={fieldId('name')} className="field-label">
            Name
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={update('name')}
            onBlur={blur('name')}
            aria-invalid={showError('name')}
            aria-describedby={showError('name') ? errorId('name') : undefined}
            className="field-input"
            placeholder="Your full name"
          />
          <FieldError id={errorId('name')} message={showError('name') ? errors.name : undefined} />
        </div>

        <div className="field">
          <label htmlFor={fieldId('company')} className="field-label">
            Company <span className="text-fg-dim">(optional)</span>
          </label>
          <input
            id={fieldId('company')}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
            className="field-input"
            placeholder="Company or project name"
          />
        </div>

        <div className="field">
          <label htmlFor={fieldId('email')} className="field-label">
            Email
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            onBlur={blur('email')}
            aria-invalid={showError('email')}
            aria-describedby={showError('email') ? errorId('email') : undefined}
            className="field-input"
            placeholder="you@company.com"
          />
          <FieldError id={errorId('email')} message={showError('email') ? errors.email : undefined} />
        </div>

        <div className="field">
          <label htmlFor={fieldId('number')} className="field-label">
            Phone
          </label>
          <input
            id={fieldId('number')}
            name="number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.number}
            onChange={update('number')}
            onBlur={blur('number')}
            aria-invalid={showError('number')}
            aria-describedby={showError('number') ? errorId('number') : undefined}
            className="field-input"
            placeholder="+971 50 000 0000"
          />
          <FieldError id={errorId('number')} message={showError('number') ? errors.number : undefined} />
        </div>
      </div>

      <div className="field">
        <label htmlFor={fieldId('message')} className="field-label">
          About the project
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={update('message')}
          onBlur={blur('message')}
          aria-invalid={showError('message')}
          aria-describedby={showError('message') ? errorId('message') : undefined}
          className="field-input min-h-[10rem] resize-y"
          placeholder="What are you building, what does success look like, and when do you need it?"
        />
        <FieldError id={errorId('message')} message={showError('message') ? errors.message : undefined} />
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input ref={honeypot} id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" size="lg" arrow disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="text-small text-fg-dim">Every inquiry is read and answered personally.</p>
      </div>

      <AnimatePresence>
        {status === 'error' && serverMessage ? (
          <motion.p
            role="alert"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-small text-fg"
          >
            {serverMessage}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message ? (
        <motion.p
          id={id}
          className="field-error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  )
}
