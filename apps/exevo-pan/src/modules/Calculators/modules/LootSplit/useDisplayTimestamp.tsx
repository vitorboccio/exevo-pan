import { useCallback } from 'react'
import { useTranslations } from 'contexts/useTranslation'
import { dateToDateObject, padTime } from 'utils'

const generateDatetime = (timestamp: number) => {
  const { day, month, year, weekday, hours, minutes } = dateToDateObject(
    new Date(timestamp),
  )

  return {
    day,
    month,
    year,
    hours: padTime(hours),
    minutes: padTime(minutes),
    weekday,
  }
}

const useDisplayTimestamp = () => {
  const {
    translations: { common },
  } = useTranslations()

  return useCallback(
    (timestamp?: number) => {
      const { month, day, year, hours, minutes, weekday } = timestamp
        ? generateDatetime(timestamp)
        : generateDatetime(+new Date())

      return `${common.Month[month]} ${day}, ${year} - ${hours}:${minutes} (${common.FullWeekdays[weekday]})`
    },
    [common],
  )
}

export default useDisplayTimestamp
