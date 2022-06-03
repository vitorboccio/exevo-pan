import { filterByTerm, circularArrayIndex } from './utils'
import { AutocompleteInputState, Action } from './types'

const AutocompleteInputReducer = (
  state: AutocompleteInputState,
  action: Action,
): AutocompleteInputState => {
  const { highlightedIndex } = state

  switch (action.type) {
    case 'USER_TYPING':
      return {
        ...state,
        inputValue: action.value,
        highlightedIndex: undefined,
        listboxStatus: true,
        filteredList: filterByTerm(action.value, state.itemList),
      }

    case 'OPTION_SELECTED':
      return {
        ...state,
        inputValue: '',
        highlightedIndex: undefined,
        listboxStatus: false,
        filteredList: state.itemList,
      }

    case 'ARROW_NAVIGATION': {
      /* @ ToDo: refactor circularArrayIndex<T> */
      /* @ ToDo: refactor circularArrayIndex simplify logic */
      const { filteredList } = state
      if (!filteredList.length) return state

      let newIndex: number
      if (highlightedIndex === undefined) {
        newIndex = action.code === 'ArrowUp' ? filteredList.length - 1 : 0
      } else {
        newIndex = circularArrayIndex(
          highlightedIndex + (action.code === 'ArrowUp' ? -1 : 1),
          filteredList,
        )
      }
      return {
        ...state,
        listboxStatus: true,
        highlightedIndex: newIndex,
        inputValue: filteredList[newIndex].name,
      }
    }

    case 'SET_LISTBOX_STATUS':
      return { ...state, listboxStatus: action.value }

    case 'REDEFINE_LIST':
      return {
        ...state,
        itemList: action.itemList,
        filteredList: filterByTerm(state.inputValue, action.itemList),
      }

    default:
      return { ...state }
  }
}

export default AutocompleteInputReducer
