import { BtnContainer, FeedbackBtn } from './Feedback.styled';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <BtnContainer>
      {options.map(name => (
        <FeedbackBtn
          type="button"
          key={name}
          onClick={onLeaveFeedback}
          name={name}
        >
          {name}
        </FeedbackBtn>
      ))}
    </BtnContainer>
  );
}
