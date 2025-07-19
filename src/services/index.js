import axios from "axios"
function fetchCountries() {
  return axios.get("https://restcountries.com/v3.1/independent?status=true")
    .then((res) => res.data)
}
export default fetchCountries