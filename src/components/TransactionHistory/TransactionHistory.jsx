import { Section } from 'components/Utils/Section';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { Body, Head, Row, Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <Head>
          <Row>
            <TableHead />
          </Row>
        </Head>
        <Body>
          {items.map(item => (
            <Row key={item.id}>
              <TableBody item={item} />
            </Row>
          ))}
        </Body>
      </Table>
    </Section>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
