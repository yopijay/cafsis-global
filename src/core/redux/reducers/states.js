const States = (state = [], action) => {
    switch(action.type) {
        case 'PERCOUNTRY': return [{ id: '', name: '-- SELECT AN ITEM BELOW --' }]
                                                        .concat((action.payload.countries)
                                                                        .filter(ctry => { return ctry.code === action.payload.country_code })[0].states);
        default: return state
    }
}

export default States;