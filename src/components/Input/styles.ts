import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 24px;
  }
`;

export const LabelInput = styled.label`
  font-size: 18px;
  color: var(--secondary);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InputComponent = styled.input`
  height: 64px;

  padding: 16px 16px;
  border-radius: 20px;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;

  font-size: 16px;
  color: var(--primary);
  font-weight: 500;

  :focus {
    border: 1px solid var(--secondary);
  }
`;
