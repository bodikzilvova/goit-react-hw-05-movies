import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BtnBack = styled(Link)`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  text-decoration: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const DetailsContainer = styled('div')`
  margin-top: 20px;
  display: flex;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: Cornsilk;
`;

export const MovieTitle = styled('h2')`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

export const Popularity = styled('p')`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.12;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const OverviewTitle = styled('h3')`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

export const OverviewText = styled('p')`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.12;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const GenresTitle = styled('h3')`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

export const AddInfoTitle = styled('h3')`
  color: Cornsilk;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const CastLink = styled('button')`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 30px;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const ReviewLink = styled('button')`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  text-decoration: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
