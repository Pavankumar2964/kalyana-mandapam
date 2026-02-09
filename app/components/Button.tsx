'use client'

import { ReactNode } from 'react'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
}: Props) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'

  const variantStyles = {
    primary: 'bg-gradient-gold text-white hover:shadow-lg',
    secondary: 'border-2 border-gold-600 text-gold-600 hover:bg-gold-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  )
}
