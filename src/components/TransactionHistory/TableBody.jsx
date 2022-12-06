import { TDataBody } from './TableBody.Styled';

export const TableBody = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TDataBody>{type}</TDataBody>
      <TDataBody>{amount}</TDataBody>
      <TDataBody>{currency}</TDataBody>
    </>
  );
};
