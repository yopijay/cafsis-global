// Libraries
import { useSelector } from "react-redux";
import { Grid, Stack, Typography } from "@mui/material";

const Cities = () => {
    const cities = useSelector(state => state.cities);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            { cities.length > 0 ? 
                cities.map((city, index) => 
                    <Grid item xs= { 6 } sm= { 4 } md= { 3 } key= { index }>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ backgroundColor: '#F5F7F8', padding: '20px', borderRadius: '8px' }}>
                            <Typography>{ (city.name).toUpperCase() }</Typography>
                            <Stack direction= "column" justifyContent= "center" alignItems= "center">
                                <Typography fontWeight= "bold" variant= "caption">{ (city.population).toLocaleString() }</Typography>
                                <Typography fontWeight= "bold" variant= "caption">Citizens</Typography>
                            </Stack>
                        </Stack>
                    </Grid>)
                : <Grid item xs= { 12 }><Typography textAlign= "center" variant= "body2">No result/s</Typography></Grid> }
        </Grid>
    );
}

export default Cities;