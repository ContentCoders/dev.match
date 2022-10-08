import styled from 'styled-components'
import Logo from '../../components/Logo'

export function Hero() {
    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #000;
    color: #fff;
    padding: 15rem 1rem;

`