import Link from 'next/link'
import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-tm-900">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-100">
        Made with <IoMdHeart className="text-red-500" /> by
        <Link href="https://www.linkedin.com/in/tamaramontijo" target="_blank">
          <strong className="font-medium">Tamara Montijo</strong>
        </Link>
      </span>
    </footer>
  )
}
