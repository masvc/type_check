import styled from 'styled-components';

const QuestionContainer = styled.div`
  width: var(--question-width);
  max-width: 100%;
  margin: 1rem auto;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem auto;
  }
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Option = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  
  &:hover {
    background: var(--background-color);
    border-color: var(--primary-color);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const QuestionText = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`; 