'use client'

import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-tm-200 bg-gray-950/80 text-sm py-1 px-3 rounded-lg"
      {...props}
    >
      {name}
    </motion.span>
  )
}
