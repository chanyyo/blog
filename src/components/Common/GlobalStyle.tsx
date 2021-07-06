import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
  }
  h1 {
    font-family: 'Exo 2', sans-serif;
    font-weigth: 900;
  }
  h2 {
    font-family: 'Exo 2', sans-serif;
    font-weigth: 800;
  }
  h2 {
    font-family: 'Exo 2', sans-serif;
    font-weigth: 700;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
