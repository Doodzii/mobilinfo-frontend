const simCardGuides = {
    telia: [
        "Telia.dk",
        "Log ind på Mit Telia",
        "Tryk på 'Abonnement'",
        "Tryk på 'Bestil sim kort / E-Sim'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    telenor: [
        "Telenor.dk",
        "Log ind på Mit Telenor",
        "Tryk på 'Abonnementer'",
        "Tryk på telefon nummeret det drejer sig om",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    3: [
        "3.dk",
        "Log ind på Mit 3",
        "Tryk på 'Abonnementer'",
        "Tryk på navn eller nummer det drejer sig om",
        "Scroll ned til Sim/E-Sim",
        "Tryk på 'Vis simkort nummer'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    telmore: [
        "Telmore.dk",
        "Log ind på Mit Telmore",
        "Tryk på 'SIM-Kort' i venstre side",
        "Tryk på de 3 små prikker",
        "Tryk på 'Vis simkort nummer'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    cbb: [
        "CBB.dk",
        "Log ind på Mit CBB",
        "Tryk på 'Abonnement'",
        "Tryk på 'Sim kort'",
        "Tryk på 'Ombyt sim kort'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    callme: [
        "CallMe.dk",
        "Log ind på Mit Call Me",
        "Tryk på 'Abonnement'",
        "Tryk på 'Bestil sim kort eller aktiver sim kort'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
    oister: [
        "Oister.dk",
        "Log ind på Mit Oister",
        "Tryk på 'Abonnement'",
        "Tryk på 'Sim kort / Mobil'",
        "Tryk på 'Vis sim kort nummer'",
        "Tryk på 'Detaljer'",
        "ICC står nu på skærmen 'SIM-Kort nummer: 8945...'",
    ],
};

const Guide = (props) => {
    let provider = props.provider.toLowerCase();

    if (!simCardGuides[provider]) {
        return (
            <p>
                Ingen simkort guide. Skriv til m101304 på Teams hvis du kender
                metoden.
            </p>
        );
    }

    let lines = simCardGuides[provider];

    return (
        <div className="guideContainer">
            <p>Find ICC nummeret ved udbyderen:</p>
            <ol type="1" className="guideList">
                {lines.map((line) => {
                    return <li key={line}>{line}</li>;
                })}
            </ol>
        </div>
    );
};

const Result = (props) => {
    const data = props.data;

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

    return (
        <div className="result">
            <p>
                Udbyder: <b className="provider">{data.provider} 🥳🎉</b>
            </p>
            <Guide provider={data.provider} />
        </div>
    );
};

export default Result;
