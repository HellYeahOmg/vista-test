import React from "react";
import styled from "styled-components";

export const PatientInfo = ({ patient }) => {
  const calculateAge = birthday => {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Wrapper>
      <Header>Информация о пациенте</Header>
      <Item>
        ФИО
        <ItemData>
          {patient.historyNumber
            ? `${patient.firstName} ${patient.lastName}`
            : ""}
        </ItemData>
      </Item>
      <Item>
        Возраст
        <ItemData>
          {patient.historyNumber
            ? calculateAge(new Date(patient.birthDate))
            : ""}
        </ItemData>
      </Item>
      <Item>
        Диагноз
        <ItemData>{patient.historyNumber ? patient.diagnosis : ""}</ItemData>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 2rem);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  width: 49%;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  background-color: #3398cc;
  align-items: center;
  padding: 1rem 1rem;
  color: #fff;
`;

const Item = styled.div`
  padding: 0.6rem 0.6rem;
  display: flex;
`;

const ItemData = styled.div`
  min-width: 10rem;
  margin-left: 1.4rem;
  border-bottom: 1px solid #dddddd;
`;
