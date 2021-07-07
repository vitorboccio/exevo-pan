import styled, { css } from 'styled-components'
import { Smooth } from 'styles'
import { ErrorMessageProps, InputWrapperProps } from './types'

export const Wrapper = styled.div``

export const Input = styled.input`
  padding: 10px 16px;
  flex-grow: 1;

  border: none;
  outline: none;
  background-color: transparent;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurface};

  ${Smooth}
  transition-property: border-color, padding;
`

export const ErrorMessage = styled.span<ErrorMessageProps>`
  padding: 0px 10px;

  font-size: 10px;
  color: ${({ theme }) => theme.colors.red};

  opacity: 0;
  transition: opacity 0.2s ease-out;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`

export const ClearButton = styled.button`
  position: relative;
  width: 42px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-out;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 12px;
    width: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.onSurface};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  width: 100%;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.colors.separator};
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: text;

  ${Smooth}
  transition-property: border-color;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
      &:focus-within {
        border-color: ${({ theme }) => theme.colors.red};
      }
    `}

  ${({ isClearButtonActive }) =>
    isClearButtonActive &&
    css`
      ${ClearButton} {
        opacity: 1;
        cursor: pointer;
        pointer-events: unset;
      }

      ${Input} {
        padding-right: 0;
      }
    `}
`
