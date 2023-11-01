const Cities = (state = [], action) => {
    switch(action.type) {
        case 'PERSTATES':
            let countries = action.payload.countries;
            let states = countries.filter(ctry => { return ctry.code === action.payload.country_code })[0].states;
            
            return states.filter(stt => { return stt.code === action.payload.state_code })[0].cities;
        default: return state;
    }
}

export default Cities;