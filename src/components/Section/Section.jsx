import PropTypes from 'prop-types';
import { SectionBlock, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
