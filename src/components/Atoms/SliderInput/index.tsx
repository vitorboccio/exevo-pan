import React, { useState, useEffect, useRef, useCallback } from 'react'
import useDrag from '../../../hooks/useDrag'
import { SliderInputProps } from './types'
import * as S from './styles'

const SliderInput = ({
  min,
  max,
  initialValue = min,
  onChange,
  ...props
}: SliderInputProps): JSX.Element => {
  const [value, setValue] = useState<number>(initialValue)
  const [sliderInputValue, setSliderInputValue] = useState<number>(initialValue)
  const [isValid, setIsValid] = useState<boolean>(true)
  console.log(isValid)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const trackWidth: number = trackRef.current?.offsetWidth ?? 1

  const positionToValue = useCallback(
    (position: number): number => {
      return Math.round((max - min) * (position / trackWidth) + min)
    },
    [min, max, trackWidth],
  )

  const boundValue = (bounded: number): number =>
    bounded < 0 ? 0 : bounded > trackWidth ? trackWidth : bounded

  const valueToTrackPercentage = (currentValue: number): string =>
    `${(currentValue / max) * 100}%`

  const { binders, isMousePressed, position } = useDrag()

  const cursorPosition = boundValue(position.x)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '')
    const newValue = parseInt(inputValue, 10)
    if (Number.isNaN(newValue)) return

    if (newValue < min) {
      setIsValid(false)
      setSliderInputValue(newValue)
    } else {
      const boundedValue = newValue > max ? max : newValue
      setValue(boundedValue)
      setIsValid(true)
    }
  }

  useEffect(() => {
    const newValue = positionToValue(cursorPosition)
    setValue(newValue)
  }, [positionToValue, cursorPosition])

  useEffect(() => {
    setSliderInputValue(value)
    const event = new Event('input', { bubbles: true })
    inputRef.current?.dispatchEvent(event)
  }, [value])

  return (
    <S.Wrapper>
      <div style={{ width: '100%' }}>
        <S.Track ref={trackRef} active={isMousePressed} {...binders}>
          <S.Cursor style={{ left: valueToTrackPercentage(value) }} />
          <S.TrackFill style={{ width: valueToTrackPercentage(value) }} />
        </S.Track>
      </div>
      <S.SliderInput
        type="number"
        min={min}
        max={max}
        value={sliderInputValue}
        onChange={handleInputChange}
      />
      <input
        hidden
        value={value}
        onInput={event =>
          onChange?.(event as React.ChangeEvent<HTMLInputElement>)
        }
        ref={inputRef}
        {...props}
      />
    </S.Wrapper>
  )
}

export default SliderInput
