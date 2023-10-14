import React from "react";
import { useState } from "react";
import axios from "axios";

import Result from "./components/Result";
import Allguides from "./components/Allguides";

import "./styles/app.css";

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

            let realNumber = phoneNumber.replaceAll(" ", "");

            if (!/^[0-9]+$/.test(realNumber)) {
                setError("Telefonnummeret må kun bestå af tal!");
                return;
            }

            if (realNumber.length !== 8) {
                setError("Telefonnummeret skal være 8 cifre!");
                return;
            }

            setLoading(true);

            const res = await axios.post(
                `https://mobilinfo-backend.doodie.workers.dev/?phoneNumber=${realNumber}`
            );

            const data = res.data;
            setData(data);
            setLoading(false);
            
        } catch (error) {
            setData({
                provider: null,
            });
            setLoading(false);
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

        return <Result data={data} />;
    };
    

    return (
        <div className="body">
            <p className="header">
                <img src="/logo.png" />
                <b>Mobil Info</b>
            </p>

            <input
                className="number"
                placeholder="Telefonnummer"
                onChange={(event) => {
                    setPhoneNumber(event.target.value);
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        retrieveMobileInfo();
                    }
                }}
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

            <Allguides />
        </div>
    );
};

export default App;