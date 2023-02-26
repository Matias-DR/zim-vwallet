import { ChangeEvent, FC, ReactNode } from 'react'

export interface SelectPlaceInterface {
    id: string
    setPlace: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    options: ReactNode,
    disabled?: boolean
}

export const SelectPlace: FC<SelectPlaceInterface> = ({ id, setPlace, options, disabled = false }) => (
    <select
        className='form-select' disabled={disabled} id={id}
        onChange={setPlace}
    >
        {options}
    </select>
);