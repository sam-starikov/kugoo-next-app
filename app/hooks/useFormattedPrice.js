/* 'use client'
import { useMemo } from 'react'

const useFormattedPrice = price => {
  return useMemo(() => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }, [price])
}

export default useFormattedPrice
 */
