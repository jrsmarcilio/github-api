import React from "react";

import * as S from "./styles";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/58918966?v=4"
        alt="avatar de Marcilio Júnior"
      />
      <S.WrapperInforUser>
        <div>
          <h1>Marcílio Júnior</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href="https://api.github.com/users/jrsmarcilio" target="_blank" rel="noreferrer">jrsmarcilio</a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInforUser>
    </S.Wrapper>
  );
};

export default Profile;
