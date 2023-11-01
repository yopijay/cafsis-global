// Libraries
import { useSelector, useDispatch } from "react-redux";

// Core
import { countries } from "core/api";
import { useGet } from "core/function/global";
import { percountry, perstates } from "core/redux/actions";

const Countrystate = props => {
    const dispatch = useDispatch();

    const { errors, control, setValue, setError, getValues } = props;
    const _states = useSelector(state => state.states);
    const { data: _countries, isFetching: fetching } = useGet({ key: ['country'], request: countries(), options: { refetchOnWindowFocus: false } });

    return ([
        {
            grid: { xs: 12, sm: 6 },
            props: {
                control: control,
                name: 'country_id',
                label: '*Country',
                disabled: false,
                fetching: false,
                options: !fetching ? [{ code: '', name: '-- SELECT AN ITEM BELOW --' }].concat(_countries) : [],
                onChange: (e, item) => { 
                    setError('country_id', { message: '' });
                    setValue('country_id', item.code);
                    dispatch(percountry({ countries: _countries, country_code: item.code }));
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                control: control,
                name: 'state_id',
                label: '*State',
                disabled: false,
                fetching: false,
                options: _states,
                onChange: (e, item) => { 
                    setError('state_id', { message: '' });
                    setValue('state_id', item.code);
                    dispatch(perstates({ countries: _countries, country_code: getValues().country_id, state_code: item.code }));
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        }
    ]);
}

export default Countrystate;