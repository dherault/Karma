import { useEffect, useMemo, useState } from 'react'

const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState()
  const callbackFunction = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  const optionsMemo = useMemo(() => options, [options])
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, optionsMemo])

  return isVisibile
}

export default useElementOnScreen