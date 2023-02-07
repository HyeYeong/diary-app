import { mediaQueries } from '@/styles/mixins/MediaQueries';
import { css, SerializedStyles } from '@emotion/react';
import React, { ReactNode } from 'react';
import type { NextPage } from 'next';

interface PropsTypes {
  children: ReactNode;
  _css?: SerializedStyles;
}

const Centering: NextPage<PropsTypes> = ({ _css, children }) => (
  <div css={[styles.centering, _css]}>{children}</div>
);

const styles = {
  centering: css`
    margin-right: 15px;
    margin-left: 15px;

    ${mediaQueries('md')} {
      max-width: 1080px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
    }
  `,
};

export default Centering;
