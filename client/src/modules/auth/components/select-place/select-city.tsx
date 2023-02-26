// React
import { ChangeEvent, FC, useEffect, useState } from 'react';

// NPM
import { City, ICity } from 'country-state-city'

// Components
import { SelectPlace } from './select-place';

export interface SelectCityInterface {
    setCity: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    country: string,
    state: string
};

const SelectCity: FC<SelectCityInterface> = ({ setCity, country, state }) => {
    const [cities, setCities] = useState<ICity[]>([]);
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        console.log('Country:', country, 'State:', state)
        if (country && state) {
            setCities(City.getCitiesOfState(country, state))
            setDisabled(false);
        } else {
            setCities([])
            setCity({ target: { value: "" } } as ChangeEvent<HTMLInputElement | HTMLSelectElement>)
            setDisabled(true);
        }
    }, [country, state]);

    return (
        <SelectPlace
            id='city'
            disabled={disabled}
            setPlace={setCity}
            options={[
                <option key="select-city" value="">Select a city</option>,
                ...cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                )),
            ]}
        />
    )
};

export default SelectCity;