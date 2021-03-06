import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  color: var(--secondary);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const TextAreaComponent = styled.textarea`
    min-height: 120px;
    max-height: 240px;

    resize: vertical;
    
    padding: 16px 16px;
    border-radius: 20px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    margin-bottom: 24px;

    font-size: 16px;
    color: var(--primary);
    font-weight: 500;
`;