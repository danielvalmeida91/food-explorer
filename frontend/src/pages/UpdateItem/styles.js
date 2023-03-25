import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 1.6rem 3.2rem 3.4rem;

  display: flex;

  flex-direction: column;

  h1 {
    font: ${({ theme }) => theme.FONTS.POPPINS400_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .ingredients {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    gap: 1.6rem;

    padding: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 0.8rem;
  }

  > button {
    padding: 1.2rem 0 1.2rem 3.2rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.5rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      margin-left: 0.8rem;
      font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  select {
    padding: 1.3rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 0.5rem;

    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER};
  }

  label {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  textarea {
    width: 100%;
    height: 17.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};

    border: none;
    resize: none;

    margin-bottom: 2.4rem;
    border-radius: 0.8rem;
    padding: 1.4rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .file-label {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 0 1.2rem 3.2rem;
    cursor: pointer;
    border-radius: 4px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_800};

    width: 100%;
  }

  input[type='file'] {
    display: none;
  }
`
export const Form = styled.form`
  width: 100%;

  position: relative;

  display: grid;
  justify-content: center;
  gap: 2.4rem;

  max-width: 36.4rem;

  margin: 0 auto;

  .back {
    position: absolute;
    top: -3rem;
    left: -1rem;
  }

  grid-template-areas:
    'title'
    'upload'
    'name'
    'category'
    'ingredients'
    'price'
    'description'
    'buttons';
  grid-template-columns: 1fr;

  margin-top: 2.4rem;

  #title {
    display: grid;
    grid-area: title;
  }

  #upload {
    display: flex;
    grid-area: upload;
    align-items: flex-end;
  }

  #upload label {
    height: 4.8rem;
  }

  #name {
    display: grid;
    grid-area: name;
    gap: 1rem;
  }

  #category {
    display: grid;
    grid-area: category;
    gap: 1rem;
  }

  #ingredients {
    display: grid;
    grid-area: ingredients;
    gap: 1rem;
  }

  #price {
    display: grid;
    grid-area: price;
    gap: 1rem;
  }

  #description {
    display: grid;
    grid-area: description;
    gap: 1rem;
  }

  #buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: buttons;
  }

  #delete {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};

    padding: 1.2rem 3.65rem;
    height: 4.8rem;
  }

  #submit {
    height: 4.8rem;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;

    padding: 2.4rem 12.5rem 0;

    .back {
      top: 0;
      left: 0;
    }

    grid-template-areas:
      'title title title'
      'upload name category'
      'ingredients ingredients price'
      'description description description'
      'buttons buttons buttons';

    #buttons {
      justify-content: flex-end;
      gap: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1368px;
  }
`
export const Input = styled.input`
  height: 4.8rem;

  padding: 1.6rem 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.DARK_800};

  border: none;
  border-radius: 0.8rem;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
