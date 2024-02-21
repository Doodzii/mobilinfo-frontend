import { Guide, simCardGuides } from "../Simguides";

import "../styles/result.css";

const Result = (props) => {
    const data = props.data;

    const copyAndSendGuide = async () => {
        
        const guide = simCardGuides[data.provider.toLowerCase()];
        let text = "";
        for (var line in guide) 
            text = `${text}${1 + parseInt(line)}) ${guide[line]}\n`
        await navigator.clipboard.writeText(text);
    }

    
    //Couldn't find the phone number
    if (data.provider == null) {
        return (
            <div className="error">
                <p>
                    Jeg kunne ikke finde det telefonnummer!
                    <br /> <br />
                    <b>Husk!</b> Det er ikke alle numre jeg kan finde.
                    <br />
                    <i>(YouSee, TDC Erhverv, Fastnetnu... andre)</i>
                </p>
            </div>
        );
    }

    const imagePath = `/logos/${data.provider.toLowerCase()}.png`;
    const guideExists = simCardGuides[data.provider.toLowerCase()] != null;

    return (
        <div className="result">
            <div class="result-header">
                <p className="provider">{data.provider}</p>
                {guideExists ? <img src={imagePath} /> : <p></p>}
            </div>
            <Guide provider={data.provider} />
            <button onClick={copyAndSendGuide} class="copyGuide">Kopiér guide tekst</button>
        </div>
    );
};

export default Result;
