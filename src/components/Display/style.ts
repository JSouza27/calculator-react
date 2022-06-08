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
  color: var(--color-grey);
  font-size: 2.062rem;
  font-weight: var(--font-weight-600);
  text-align: right;
`;

export { DisplayWrapper, CountWrapper };
