import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background: linear-gradient(155.85deg, #f44a87 45.83%, #ffb930 100%);
  height: 100%;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
  text-align: flex-start;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 18px;
  color: var(--secondary);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: left;
  width: 100%;
`;
