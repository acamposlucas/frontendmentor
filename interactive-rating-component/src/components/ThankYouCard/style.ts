import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--darkBlue);
  border-radius: 1.5rem;
  padding: 32px 24px 46px 24px;
  text-align: center;

  img {
    margin-bottom: 1.5rem;
  }

  .rating-output {
    background-color: var(--veryDarkBlue);
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 1.875rem;
    p {
      color: var(--primary);
    }
  }

  h1 {
    font-size: 2rem;
    color: var(--white);
    margin-bottom: 1.875rem;
  }

  p {
    color: var(--mediumGrey);
    line-height: 1.5;
  }
`;
