import { useState, useReducer, useCallback, useEffect, useRef } from 'react'
import { Option } from 'components/Atoms'
import { v4 as uuidv4 } from 'uuid'
import { indexToId } from 'components/Atoms/Listbox/utils'
import * as S from './styles'
import { filterByTerm } from './utils'
import { AutocompleteInputProps } from './types'
import AutocompleteInputReducer from './reducer'

const AutocompleteInput = ({
  className,
  style,
  itemList = [],
  onItemSelect,
  ...props
}: AutocompleteInputProps): JSX.Element => {
  const { current: listboxId } = useRef(uuidv4())

  const [currentList, setCurrentList] = useState<Option[]>(itemList)
  const [{ listboxStatus, highlightedIndex, inputValue }, dispatch] =
    useReducer(AutocompleteInputReducer, {
      listboxStatus: false,
      highlightedIndex: undefined,
      inputValue: '',
    })

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'USER_TYPING', value: event.target.value })
      setCurrentList(filterByTerm(event.target.value, itemList))
    },
    [itemList],
  )

  const handleKeyboard = (event: React.KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        if (currentList.length)
          dispatch({
            type: 'ARROW_NAVIGATION',
            value: -1,
            list: currentList,
          })
        event.preventDefault()
        break
      case 'ArrowDown':
        if (currentList.length)
          dispatch({
            type: 'ARROW_NAVIGATION',
            value: 1,
            list: currentList,
          })
        event.preventDefault()
        break
      case 'Enter':
      case 'NumpadEnter':
        if (currentList.length === 1) {
          onItemSelect?.(currentList[0])
          dispatch({ type: 'OPTION_SELECTED' })
        } else if (highlightedIndex !== undefined) {
          onItemSelect?.(currentList[highlightedIndex])
          dispatch({ type: 'OPTION_SELECTED' })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (highlightedIndex !== undefined) {
      const item = document.getElementById(
        indexToId(highlightedIndex) as string,
      )
      item?.scrollIntoView({
        block: 'nearest',
      })
    }
  }, [highlightedIndex])

  useEffect(() => {
    setCurrentList(itemList)
  }, [itemList])

  return (
    <S.Wrapper className={className} style={style}>
      <S.Popover
        placement="bottom"
        trigger="none"
        visible={listboxStatus}
        content={
          <S.Listbox id={listboxId} highlightedIndex={highlightedIndex}>
            {currentList.map(item => (
              <Option
                key={item.value}
                value={item.value}
                onMouseDown={() => {
                  onItemSelect?.(item)
                  dispatch({ type: 'OPTION_SELECTED' })
                }}
              >
                {item.name}
              </Option>
            ))}
          </S.Listbox>
        }
      >
        <S.Input
          aria-haspopup
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={listboxStatus}
          aria-owns={listboxId}
          allowClear
          value={inputValue}
          onChange={handleChange}
          onFocus={() => dispatch({ type: 'SET_LISTBOX_STATUS', value: true })}
          onBlur={() => dispatch({ type: 'SET_LISTBOX_STATUS', value: false })}
          onKeyDown={handleKeyboard}
          {...props}
        />
      </S.Popover>
    </S.Wrapper>
  )
}

export default AutocompleteInput
