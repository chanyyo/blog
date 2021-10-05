import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage, { ProfileImageProps } from 'components/Main/ProfileImage';

type IntroductionProps = ProfileImageProps;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  height: 100%;
  z-index: 999;
  border-right: 1px solid rgba(230, 230, 230, 1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.h1`
  margin-top: 5px;
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Chan.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
