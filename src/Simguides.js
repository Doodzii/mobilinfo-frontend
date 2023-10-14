
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
}

const Guide = (props) => {
    let provider = props.provider.toLowerCase();

    let title = "Sådan finder du ICCID";
    if (props.title)
        title = props.title;

    if (!simCardGuides[provider]) {
        return (
            <p>
                Ingen simkort guide.
            </p>
        );
    }

    let lines = simCardGuides[provider];

    return (
        <div className="guideContainer">
            <p>{title}</p>
            <ol type="1" className="guideList">
                {lines.map((line) => {
                    return <li key={line}>{line}</li>;
                })}
            </ol>
        </div>
    );
};

export { Guide, simCardGuides };