import 'lenis/dist/lenis.css'
import './styles/tokens.css'
import './styles/global.css'
import { useEffect } from 'react'
import { HomePage } from '@/pages/home'
import { startSmoothScroll } from '@/shared/lib'

export function App() {
  useEffect(() => startSmoothScroll(), [])
  return <HomePage />
}
