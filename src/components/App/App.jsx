import userData from 'json/user';
import stats from 'json/data';
import friends from 'json/friends';
import transactions from 'json/transactions.json';

import { Container } from 'components/App/App.styled';

import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Section title="1 - Профиль социальной сети">
        <Profile {...userData} /> 
      </Section>

      <Section title="2 - Секция статистики">
        <Statistics title="Upload stats" stats={stats}></Statistics>
      </Section>

      <Section title="3 - Список друзей">
        <FriendList friends={friends}></FriendList>
      </Section>

      <Section title="4 - История транзакций">
        <TransactionHistory items={transactions}></TransactionHistory>
      </Section>
    </Container>
  );
}
