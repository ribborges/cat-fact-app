import axios from "axios";

export const catFact = axios.create({ baseURL: "https://catfact.ninja/fact" });

export const catImg = axios.create({ baseURL: "https://api.thecatapi.com/v1/images/search" });