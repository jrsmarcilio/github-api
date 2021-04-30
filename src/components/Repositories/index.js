import React from "react";
import * as S from "./styles";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Sttared</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>Panel Repositories</S.WrapperTabPanel>
      <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
