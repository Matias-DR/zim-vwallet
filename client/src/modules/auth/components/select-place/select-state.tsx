// React
import { ChangeEvent, FC, useEffect, useState } from 'react';

// NPM
import { IState, State } from 'country-state-city'

// Components
import { SelectPlace } from './select-place';

export interface SelectStateInterface {
    setState: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    country: string
};

const SelectState: FC<SelectStateInterface> = ({ setState, country }) => {
    const [states, setStates] = useState<IState[]>([]);
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (country) {
            setStates(State.getStatesOfCountry(country))
            setDisabled(false);
        } else {
            setStates([])
            setState({ target: { value: "" } } as ChangeEvent<HTMLInputElement | HTMLSelectElement>)
            setDisabled(true);
        }
    }, [country]);

    return (
        <SelectPlace
            id='state'
            disabled={disabled}
            setPlace={setState}
            options={[
                <option key="select-state" value="">Select a state</option>,
                ...states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                )),
            ]}
        />
    )
};

export default SelectState;