import React, { useEffect, useState } from "react";
import { PatientInfo, Tabs } from "./components";
import styled from "styled-components";

export const App = () => {
  const [presentList, setPresentList] = useState([]);
  const [quittingList, setQuittingList] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    fetchPresentList();
    fetchQuittingList();
  }, []);

  const fetchPresentList = async () => {
    const data = await fetch(
      "https://www.mocky.io/v2/5db69fb52f000058007fe8dc"
    );
    const presentList = await data.json();
    setPresentList(presentList);
    console.log(presentList);
  };

  const fetchQuittingList = async () => {
    const data = await fetch(
      "https://www.mocky.io/v2/5db6a0342f000070007fe8e1"
    );
    const quittingList = await data.json();
    setQuittingList(quittingList);
    console.log(quittingList);
  };

  console.log(patient);

  return (
    <Wrapper>
      <PatientInfo patient={patient}></PatientInfo>
      <Tabs
        setPatient={setPatient}
        presentList={presentList}
        quittingList={quittingList}
        activePatientNumber={patient.historyNumber}
      ></Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0.4rem;
  justify-content: space-between;
`;
