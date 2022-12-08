import { TData } from 'components/Utils/TableData';

export const TableBody = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TData>{type}</TData>
      <TData>{amount}</TData>
      <TData>{currency}</TData>
    </>
  );
};
