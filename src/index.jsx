// Libraries
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Core
import { FormPrvdr } from "core/context/Form";
import { Theme } from "core/theme";
import reducers from "core/redux/reducers";

// Assets
import 'assets/font/font.css';
import 'assets/css/scrollbar.css';

// Component
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
const client = new QueryClient();
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
    <ThemeProvider theme= { Theme }>
        <QueryClientProvider client= { client }>
            <CssBaseline />
            <Provider store= { store }>
                <FormPrvdr>
                    <App />
                </FormPrvdr>
            </Provider>
        </QueryClientProvider>
    </ThemeProvider>
)