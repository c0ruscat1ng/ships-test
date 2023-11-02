import Header from "./Components/Header/Header.tsx";
import ShipsList from "./Components/ShipsList/ShipsList.tsx";


function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <ShipsList/>
            </div>
        </>
    )
}

export default App
