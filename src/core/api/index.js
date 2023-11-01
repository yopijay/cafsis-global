// Core
import { api  } from "core/function/global";
import Env from "./Env.json";

const env = 'local' // Environment

export const countries = async () => { return await api({ url: `${Env[env].url}/countries`, method: `get` }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }