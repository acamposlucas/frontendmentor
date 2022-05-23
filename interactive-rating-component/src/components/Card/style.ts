import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--darkBlue);
  border-radius: 1.5rem;
  padding: 24px 24px 32px 24px;

  img {
    padding: 1rem;
    background-color: var(--veryDarkBlue);
    border-radius: 100%;
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--lightGrey);
    font-weight: var(--fw-regular);
    margin-bottom: 2rem;

    &.title {
      color: var(--white);
      font-weight: var(--fw-bold);
      font-size: 24px;
      margin-bottom: 1.5rem;
    }
  }

  form {
    display: grid;
    grid-template-rows: auto auto;
    gap: 1.5rem;

    fieldset {
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;

      div {
        height: 42px;
        width: 42px;

        label {
          height: inherit;
          width: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: var(--veryDarkBlue);
          color: var(--lightGrey);
          font-weight: var(--fw-bold);
          border-radius: 100%;
          transition: all 200ms;

          &:hover {
            background-color: var(--lightGrey);
            color: var(--white);
          }

          &:focus-within {
            background-color: var(--primary);
            color: var(--white);
          }

          input {
            appearance: none;
            z-index: -10;
          }
        }
      }
    }
  }

  button {
    background-color: var(--primary);
    border: none;
    border-radius: 32px;
    color: var(--white);
    cursor: pointer;
    font-size: 14px;
    font-weight: var(--fw-bold);
    padding: 1rem 0;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    width: 100%;
    transition: all 500ms;

    &:hover {
      color: var(--primary);
      background-color: var(--white);
    }
  }
`;
