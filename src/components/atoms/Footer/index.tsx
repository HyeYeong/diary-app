import React from 'react';
import type { NextPage } from 'next';
import { css, SerializedStyles } from '@emotion/react';
import { COLORS } from '@/styles/variables/Colors';
interface PropTypes {
  _css?: SerializedStyles | SerializedStyles[];
}
const Footer: NextPage<PropTypes> = ({ _css }) => {
  return (
    <div css={[initialStyles, _css]}>
      copyrightⓒ 2022 All rights reserved by 혜영
    </div>
  );
};

const initialStyles = css`
  margin-top: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 14px;
  color: ${COLORS.CADET_BLUE};
  background: ${COLORS.GRAY[1]};
  text-align: center;
`;

export default Footer;
