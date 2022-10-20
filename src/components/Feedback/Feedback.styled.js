import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const FeedbackBtn = styled.button`
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 8px;

  cursor: pointer;

  :active {
    background-color: blue;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;
