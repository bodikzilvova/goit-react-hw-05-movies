import styled from '@emotion/styled';

export const CastList = styled('ul')`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  color: Cornsilk;
`;

export const ActorName = styled('p')`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.12;
  letter-spacing: 0.03em;
`;

export const ActorRole = styled('p')`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  letter-spacing: 0.03em;
`;

export const NoCast = styled('p')`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  letter-spacing: 0.03em;
  color: Cornsilk;
`;
