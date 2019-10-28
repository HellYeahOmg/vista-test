import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Tabs = ({
  presentList,
  quittingList,
  setPatient,
  activePatientNumber
}) => {
  const [tab, setTab] = useState("present");

  return (
    <Wrapper>
      <TabLinks>
        <Link active={tab === "present"} onClick={() => setTab("present")}>
          Присутствуют({presentList.length})
        </Link>
        <Link active={tab === "quitting"} onClick={() => setTab("quitting")}>
          Выбывшие({quittingList.length})
        </Link>
      </TabLinks>

      {tab === "present" ? (
        <>
          <Header>
            <HeaderItem>№ ИБ</HeaderItem>
            <HeaderItem>ФИО</HeaderItem>
            <HeaderItem>Палата</HeaderItem>
          </Header>
          {presentList.map(p => (
            <LinkItem
              active={activePatientNumber === p.historyNumber}
              key={p.historyNumber}
              onClick={() => setPatient(p)}
            >
              <LinkCell>{p.historyNumber}</LinkCell>
              <LinkCell>{`${p.firstName} ${p.lastName}`}</LinkCell>
              <LinkCell>{p.patrName}</LinkCell>
            </LinkItem>
          ))}
        </>
      ) : (
        <>
          <Header>
            <HeaderItem>№ ИБ</HeaderItem>
            <HeaderItem>ФИО</HeaderItem>
            <HeaderItem>Причина выбытия</HeaderItem>
          </Header>
          {quittingList.map(p => (
            <LinkItem
              active={activePatientNumber === p.historyNumber}
              key={p.historyNumber}
              onClick={() => setPatient(p)}
            >
              <LinkCell>{p.historyNumber}</LinkCell>
              <LinkCell>{`${p.firstName} ${p.lastName}`}</LinkCell>
              <LinkCell>{p.cause}</LinkCell>
            </LinkItem>
          ))}
        </>
      )}
    </Wrapper>
  );
};

const TabLinks = styled.div`
  display: flex;
  background-color: #fafafa;
  align-items: center;
`;

const Wrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  width: 49%;
  background-color: #fff;
  height: calc(100vh - 2rem);
`;

const Link = styled.span`
  padding: 1rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  ${props => props.active && "color: #3398CC; border-bottom: 2px solid #3398CC"}
`;

const Header = styled.div`
  display: flex;
  padding: 0.6rem 0.6rem;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
`;

const HeaderItem = styled.div`
  flex: 1;
  color: #a8a8a8;
`;

const LinkCell = styled.div`
  flex: 1;
`;

const LinkItem = styled.div`
  display: flex;
  padding: 0.6rem 0.6rem;
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #d3cece;
  }
  ${props =>
    props.active &&
    css`
      background-color: #d3cece;
      &::before {
        content: "";
        height: 100%;
        background-color: #3398cc;
        width: 0.2rem;
        position: absolute;
        top: 0;
        left: 0;
      }
    `}
`;
