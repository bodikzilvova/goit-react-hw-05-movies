import styled from '@emotion/styled';

export const Form = styled('form')`
  background: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const QueryInput = styled('input')`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const BtnSearch = styled('button')`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  width: 100px;
  height: 37px;
  cursor: pointer;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
