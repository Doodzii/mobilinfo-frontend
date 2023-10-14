import {simCardGuides, Guide} from "../Simguides";

import "../styles/allguides.css";

const Allguides = () => {

    let providers = [];
    for (let provider in simCardGuides) {
        providers.push(provider);
    }

    return (
        <div className="allguides">
            <h1>Alle simkort guides</h1>
            <div>
                {providers.map((provider) => {
                    return <Guide provider={provider} title={`${provider.toUpperCase()}`} />
                })}
            </div>
        </div>
    )
}

export default Allguides;