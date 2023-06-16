import userData from 'json/user';
import stats from 'json/data';

import { Container } from 'components/App/App.styled';

import Profile from 'components/Profile/Profile';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

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

      </Section>

      <Section title="4 - История транзакций">123</Section>
    </Container>
  );
}
