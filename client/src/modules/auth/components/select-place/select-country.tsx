// React
import { ChangeEvent, FC } from 'react';

// NPM
import { Country } from 'country-state-city'

// Components
import { SelectPlace } from './select-place';

export interface SelectCountryInterface {
    setCountry: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
};

const SelectCountry: FC<SelectCountryInterface> = ({ setCountry }) => (
    <SelectPlace
        id='country'
        setPlace={setCountry}
        options={[
            <option key="select-country" value="">
                Select a country
            </option>,
            ...Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                </option>
            )),
        ]}
    />
);

export default SelectCountry;