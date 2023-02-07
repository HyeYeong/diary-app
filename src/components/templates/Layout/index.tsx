import { COLORS } from '@/styles/variables/Colors';
import { css, SerializedStyles } from '@emotion/react';
import React, { ReactNode } from 'react';
import type { NextPage } from 'next';

type COLOR_TYPE = 'white' | 'gray';

interface PropsTypes {
  backgroudColor?: COLOR_TYPE;
  children: ReactNode;
  _css?: SerializedStyles;
}

const Layout: NextPage<PropsTypes> = ({
  _css,
  children,
  backgroudColor = 'white',
}) => (
  <section css={[initialStyle, backgroudColor && styles(backgroudColor), _css]}>
    {children}
  </section>
);

const initialStyle = css`
  position: relative;
`;

const styles = (backgroudColor: COLOR_TYPE) => {
  switch (backgroudColor) {
    case 'gray':
      return css`
        background-color: ${COLORS.GRAY[2]};
      `;
    default:
      return css``;
  }
};

export default Layout;
