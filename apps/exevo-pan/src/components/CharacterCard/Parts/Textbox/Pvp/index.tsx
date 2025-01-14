import { memo } from 'react'
import clsx from 'clsx'
import { LabeledTextBox } from '../../atoms'

const Pvp = ({ serverData }: Pick<CharacterObject, 'serverData'>) => (
  <LabeledTextBox labelText="PvP">
    <div
      className={clsx(
        'border-1 h-2.5 w-2.5 rounded-full border-solid border-black/20 shadow-sm',
        serverData.battleye ? 'bg-battleGreen' : ' bg-battleYellow',
      )}
    />
    {serverData.pvpType.string}
  </LabeledTextBox>
)

export default memo(Pvp)
