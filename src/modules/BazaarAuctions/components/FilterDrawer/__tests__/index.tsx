import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils/test'
import FilterDrawer from '..'

jest.mock('hooks/useIsMounted', () => jest.fn().mockReturnValue(true))

const mockOnClose = jest.fn()
const mockSetActiveFilterCount = jest.fn()
const mockSetUrlValues = jest.fn()

const defaultArgs = {
  open: true,
  onClose: mockOnClose,
  setActiveFilterCount: mockSetActiveFilterCount,
}

describe('<FilterDrawer />', () => {
  beforeEach(() => {
    mockOnClose.mockClear()
    mockSetActiveFilterCount.mockClear()
    mockSetUrlValues.mockClear()

    jest
      .spyOn(window, 'setTimeout')
      .mockImplementationOnce((fn) => fn() as unknown as NodeJS.Timeout)
  })

  test('should toggle between open/close', () => {
    const { rerender } = renderWithProviders(<FilterDrawer {...defaultArgs} />)

    const drawerElement = screen.getByRole('dialog')
    expect(drawerElement).toBeVisible()

    rerender(<FilterDrawer {...defaultArgs} open={false} />)
    expect(drawerElement).not.toBeVisible()

    rerender(<FilterDrawer {...defaultArgs} />)
    expect(drawerElement).toBeVisible()
  })

  test('should call onClose', () => {
    renderWithProviders(<FilterDrawer {...defaultArgs} />)

    expect(mockOnClose).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByLabelText('Close drawer'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  test('should call setActiveFilterCount', () => {
    renderWithProviders(<FilterDrawer {...defaultArgs} />)

    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(2)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(0)

    userEvent.click(screen.getByAltText('Knight'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(3)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(1)

    userEvent.click(screen.getByAltText('Druid'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(4)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(1)

    userEvent.type(screen.getByLabelText('Search nickname'), 'K')
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(5)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(2)

    userEvent.click(screen.getByText('Rare nicknames'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(6)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(3)

    userEvent.click(screen.getByText('Rare nicknames'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(7)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(2)

    userEvent.click(screen.getByAltText('Knight'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(8)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(2)

    userEvent.click(screen.getByAltText('Druid'))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(9)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(1)

    userEvent.click(screen.getByPlaceholderText('Select imbuements'))
    userEvent.click(screen.getByRole('option', { name: 'Critical Hit' }))
    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(10)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(2)
  })

  test('autocompleteInputs should control its chips/options correctly', () => {
    renderWithProviders(<FilterDrawer {...defaultArgs} />)

    const inputElement = screen.getByPlaceholderText('Select imbuements')

    userEvent.click(inputElement)
    userEvent.click(screen.getByRole('option', { name: 'Critical Hit' }))
    expect(
      screen.queryByRole('option', { name: 'Critical Hit' }),
    ).not.toBeInTheDocument()
    expect(screen.getByLabelText('Remove item')).toBeInTheDocument()

    userEvent.click(inputElement)
    expect(
      screen.queryByRole('option', { name: 'Critical Hit' }),
    ).not.toBeInTheDocument()

    userEvent.click(screen.getByLabelText('Remove item'))
    expect(screen.queryByLabelText('Remove item')).not.toBeInTheDocument()
    userEvent.click(inputElement)
    expect(
      screen.getByRole('option', { name: 'Critical Hit' }),
    ).toBeInTheDocument()
  })

  test('toggle all items/imbuements should control filters correctly', () => {
    renderWithProviders(<FilterDrawer {...defaultArgs} />)

    const inputElement = screen.getByPlaceholderText('Select imbuements')
    userEvent.click(inputElement)
    expect(screen.queryAllByRole('option')).toHaveLength(23)
    expect(screen.queryByLabelText('Remove item')).not.toBeInTheDocument()

    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(2)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(0)

    const toggleElement = screen.getByRole('switch', { name: 'All imbuements' })
    userEvent.click(toggleElement)
    userEvent.click(inputElement)
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    expect(screen.queryAllByLabelText('Remove item')).toHaveLength(23)

    expect(mockSetActiveFilterCount).toHaveBeenCalledTimes(3)
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(1)

    screen.queryAllByLabelText('Remove item').forEach((element) => {
      userEvent.click(element)
    })

    userEvent.click(inputElement)
    expect(screen.queryAllByRole('option')).toHaveLength(23)
    expect(screen.queryByLabelText('Remove item')).not.toBeInTheDocument()
    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(0)
  })

  test('should reset filters correctly', () => {
    renderWithProviders(<FilterDrawer {...defaultArgs} />)

    const nickInput = screen.getByLabelText('Search nickname')
    const knightChip = screen.getByText('Knight')
    const toggleChip = screen.getByRole('switch', { name: 'All imbuements' })
    const rareNickChip = screen.getByText('Rare nicknames')

    userEvent.type(nickInput, 'Ksu')
    userEvent.click(knightChip)
    userEvent.click(toggleChip)
    userEvent.click(rareNickChip)

    expect(nickInput).toHaveValue('Ksu')
    expect(knightChip).toBeChecked()
    expect(toggleChip).toBeChecked()
    expect(rareNickChip).toBeChecked()
    expect(screen.getAllByLabelText('Remove item')).toHaveLength(23)

    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(4)

    userEvent.click(screen.getByText('Reset filters'))

    expect(nickInput).toHaveValue('')
    expect(knightChip).not.toBeChecked()
    expect(toggleChip).not.toBeChecked()
    expect(rareNickChip).not.toBeChecked()
    expect(screen.queryByLabelText('Remove item')).not.toBeInTheDocument()

    expect(mockSetActiveFilterCount).toHaveBeenLastCalledWith(0)
  })
})