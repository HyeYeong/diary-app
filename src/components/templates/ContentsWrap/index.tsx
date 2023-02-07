import { mediaQueries } from '@/styles/mixins/MediaQueries';
import { css, SerializedStyles } from '@emotion/react';
import React, { ReactNode } from 'react';
import type { NextPage } from 'next';

interface PropsTypes {
  children: ReactNode;
  _css?: SerializedStyles;
}

const ContentsWrap: NextPage<PropsTypes> = ({ _css, children }) => (
  <article css={[initialStyle, _css]}>{children}</article>
);

const initialStyle = css`
  margin-top: 50px;
  padding: 0 0 20px;

  ${mediaQueries('md')} {
    margin-top: 50px;
    padding: 0 0 20px;
  }
`;

export default ContentsWrap;
