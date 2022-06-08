import styled from 'styled-components';

const DisplayWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  max-height: 20.687rem;
  padding: 1.25rem;
  width: 100%;
`;

const CountWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2.062rem;
  font-weight: var(--font-weight-600);
  text-align: right;
  transition: color 0.3s ease;
`;

export { DisplayWrapper, CountWrapper };
