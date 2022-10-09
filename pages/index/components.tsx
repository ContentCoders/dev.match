import styled from 'styled-components'
import TypeFormSignUp from '../../components/TypeFormSignUp'

export function Hero() {
    return (
        <StyledHeader>
            <StyledH1>Find your programming buddy!</StyledH1>
            <TypeFormSignUp />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    color: #fff;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledH1 = styled.h1`
    font-size: 4rem;
    font-family: 'Poppins', sans-serif;
`