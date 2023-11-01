// Libraries
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Stack, Typography } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form builder

// Components
import Countrystate from "components/country-state";
import Cities from "components/Cities";

// Custom styles
const container = {
    height: '100vh',
    overflow: 'hidden',
    '&::-webkit-scrollbar': { display: 'none' },
    padding: { xs: '30px 0', md: '40px 30px' }
}

const App = () => {
    const population = useSelector(state => state.population);
    const { errors, control, setValue, setError, getValues } = useContext(FormCntxt);

    return (
        <Container maxWidth= "md">
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container } spacing= { 2 }>
                <Box>
                    <FormBuilder fields= {
                            Countrystate({
                                errors: errors,
                                control: control,
                                setValue: setValue,
                                setError: setError,
                                getValues: getValues
                            })
                        } />
                </Box>
                <Typography sx= {{ fontWeight: 'bold', textAlign: 'center' }}>Total citizens: { (population).toLocaleString() }</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                    <Typography>Cities</Typography>
                    <Box sx= {{ flexGrow: 1, overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}><Cities /></Box>
                </Stack>
            </Stack>
        </Container>
    );
}

export default App;