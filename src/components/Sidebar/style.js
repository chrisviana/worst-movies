import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  background-color: #ededed;
  height: 100vh;

  @media(max-width: 768px){
    width: 100%;
    height: 6rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #828282;
    padding: 0.3rem;
  }

  a.active {
    color: #07b7f7;
  }
`