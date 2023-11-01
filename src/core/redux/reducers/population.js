const Population = (state = 0, action) => {
    switch(action.type) {
        case 'PERSTATES':
            let countries = action.payload.countries;
            let states = countries.filter(ctry => { return ctry.code === action.payload.country_code })[0].states;
            let cities = states.filter(stt => { return stt.code === action.payload.state_code })[0].cities;

            cities.forEach(city => state += city.population);
            return state;
        default: return state
    }
}

export default Population;