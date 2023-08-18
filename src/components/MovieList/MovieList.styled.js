import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Films = styled(Link)`
  color: Cornsilk;
  font-weight: 400;
font-size: 24px;
line-height: 1.36;
`;

export const List = styled('li')`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
