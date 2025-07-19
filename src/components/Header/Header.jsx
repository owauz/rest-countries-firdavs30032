import { useQuery } from "@tanstack/react-query"
import fetchCountries from "../../services"
import { useEffect, useState } from "react"
function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [filters, setFilters] = useState([])
    const [active, setActive] = useState(false)
    const [selects, setSelects] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")
    const { data, isLoading, isError } = useQuery({
        queryKey: ["countries"],
        queryFn: fetchCountries,
    })
    useEffect(() => {
        if (data) {
            setFilters(data)
        }
    }, [data])
    const handleSearchChange = (e) => {
        const search = e.target.value
        setSearchTerm(search)
        if (data) {
            const filtered = data.filter((item) => {
                const matchName = item.name.common.toLowerCase().includes(search.toLowerCase())
                const matchRegion = selects === "All" || item.region === selects
                return matchName && matchRegion
            })
            setFilters(filtered)
        }
    }
    const DropDown = (region) => {
        setSelects(region)
        setActive(false)

        if (data) {
            let filtered = data
            if (region !== "All") {
                filtered = data.filter((country) => country.region === region)
            }
            if (searchTerm) {
                filtered = filtered.filter((item) =>
                    item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }

            setFilters(filtered)
        }
    }
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? "#202C36" : "#F2F2F2"
    }, [isDarkMode])
    if (isLoading) return <p className="loading">Loading...</p>
    if (isError) return <p className="loading">An error occurred</p>
    const content = (
        <div className="cards">
            {filters.map((country, idx) => (
                <div
                    className="card"
                    key={idx}
                    style={{
                        background: isDarkMode ? "#2B3844" : "white",
                        color: isDarkMode ? "white" : "black",
                    }}
                >
                    <img src={country.flags.png} alt="" />
                    <div className="about">
                        <h4>{country.name.common}</h4>
                        <p className="population">Population: {country.population.toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="rest" style={{ backgroundColor: isDarkMode ? "#2B3844" : "#FFFFFF" }}>
            <div className="navbar">
                <h2 style={{ color: isDarkMode ? "white" : "black" }}>Where in the world?</h2>
                <div className="dark-mode">
                    <button
                        onClick={toggleDarkMode}
                        style={{ display: isDarkMode ? "block" : "none", color: "#ffffff" }}
                    >
                        <img src="img/light.svg" alt="" />
                        Dark Mode
                    </button>
                    <button
                        className="dark"
                        onClick={toggleDarkMode}
                        style={{ display: isDarkMode ? "none" : "block" }}
                    >
                        <img src="img/moon.svg" alt="" />
                        Light Mode
                    </button>
                </div>
            </div>

            <div className="handle-search">
                <div className="flag-search" style={{ backgroundColor: isDarkMode ? "#2B3844" : "white" }}>
                    <img src="img/search.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Search for a country…"
                        onChange={handleSearchChange}
                        value={searchTerm}
                        style={{
                            backgroundColor: isDarkMode ? "#2B3844" : "white",
                            color: isDarkMode ? "white" : "black",
                        }}
                    />
                </div>

                <div className={`select-menu${active ? " active" : ""}`}>
                    <div
                        className="select-btn"
                        onClick={() => setActive(!active)}
                        style={{
                            backgroundColor: isDarkMode ? "#2B3844" : "white",
                            borderRadius: "5px",
                            color: isDarkMode ? "white" : "black",
                        }}
                    >
                        <span className="sBtn-text">{selects}</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <ul className="options" style={{ backgroundColor: isDarkMode ? "#2B3844" : "white" }}>
                        {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
                            <li
                                key={region}
                                className="option"
                                style={{ backgroundColor: isDarkMode ? "#2B3844" : "white" }}
                                onClick={() => DropDown(region)}
                            >
                                <span
                                    className="option-text"
                                    style={{ color: isDarkMode ? "white" : "black" }}
                                >
                                    {region}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {content}
        </div>
    )
}
export default Header
