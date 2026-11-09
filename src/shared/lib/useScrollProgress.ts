import { useEffect, useState } from 'react'

/** 페이지 스크롤 위치(px)와 진행률(0~1) */
export function useScrollProgress() {
  const [state, setState] = useState({ y: 0, progress: 0 })

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState({ y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return state
}
