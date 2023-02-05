import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
    //This is constantly updated from the input field
    const [phoneNumber, setPhoneNumber] = useState("");
    //This is the data retrieves from the backend
    const [data, setData] = useState({});
    //Is set if its loading data from the backend
    const [isLoading, setLoading] = useState(false);
    //Is set if it has an error. Is cleared upon new request
    const [error, setError] = useState(null);

    //Retrieve information about a phone number
    const retrieveMobileInfo = async () => {
        try {
            //Check if the input is 8 characters long
            setError(null);
            if (phoneNumber.length !== 8) {
                setError("Telefonnummeret skal være 8 cifre!");
                return;
            }

            setLoading(true);
            const res = await axios.put(
                `https://mobilinfo-backend.doodie.workers.dev/?phoneNumber=${phoneNumber}`
            );
            const data = res.data;

            setData(data);
            setLoading(false);
        } catch (error) {
            setData({});
            setLoading(false);
            setError(
                "Der skete en fejl! Kontakt m101304 hvis dette fortsætter."
            );
        }
    };

    //Information component. Is displayed after request.
    const InfoComponent = () => {
        //There is an error. Display it to the user.
        if (error != null) {
            return (
                <div className="error">
                    <p>{error}</p>
                </div>
            );
        }

        //No request has been made. Display nothing.
        if (Object.keys(data) == 0) {
            return <></>;
        }

        //Couldn't find the phone number
        if (data.provider == null || data.valid == false) {
            return (
                <div className="error">
                    <p>
                        Jeg kunne ikke finde det telefonnummer!
                        <br></br>
                        Husk! Det er ikke alle numre jeg kan finde.
                    </p>
                </div>
            );
        }

        return (
            <div className="result">
                <p>
                    Udbyder: <b>{data.provider}</b>
                </p>
                <p>
                    Gyldig: <b>{data.valid ? "JA" : "NEJ"}</b>
                </p>
                <p>
                    ICC GUIDE: <i>Kommer..</i>
                </p>
            </div>
        );
    };

    return (
        <div className="body">
            <p className="header">
                <b>📱 Mobil Info</b>
            </p>
            <p className="secondHeader">
                Lavet af <b>m101304</b>
            </p>

            <input
                className="number"
                placeholder="Telefonnummer"
                onChange={(event) => {
                    setPhoneNumber(event.target.value);
                }}
                maxLength="8"
            ></input>

            <button
                className="searchButton"
                onClick={() => {
                    retrieveMobileInfo();
                }}
            >
                Hent data
            </button>

            {isLoading ? (
                <>
                    <div className="loading-spinner" />
                </>
            ) : (
                <>
                    <InfoComponent />
                </>
            )}
        </div>
    );
};

export default App;
