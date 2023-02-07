import type { NextPage } from 'next';
import { css, SerializedStyles } from '@emotion/react';
import { COLORS } from '@/styles/variables/Colors';
import React from 'react';
import { ReactNode } from 'react';

interface Props {
  _css?: SerializedStyles | SerializedStyles[];
  children: ReactNode | JSX.Element | string;
}

const Blockquote: NextPage<Props> = ({ children, _css }) => {
  return <blockquote css={[initialStyle.wrap, _css]}>{children}</blockquote>;
};

const initialStyle = {
  wrap: css`
    border-left: 4px solid ${COLORS.GRAY[2]};
    padding-left: 20px;
    margin: 20px 0;
    color: ${COLORS.GRAY[0]};
    line-height: 24px;

    &:hover {
      transition: all 0.1s;
      background-color: ${COLORS.WHITE};
      opacity: 0.9;
    }
  `,
};

export default Blockquote;
