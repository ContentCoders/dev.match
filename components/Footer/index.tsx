import styled from 'styled-components'
import Logo from '../Logo'


export default function Footer() {
    //get current year
    const year = new Date().getFullYear()

    return (
        <StyledFooter>
            <StyledFooterContent>
                <p>dev.match()</p>
                <span>© Copyright {year}</span>
            </StyledFooterContent>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #fff;
`
const StyledFooterContent = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
`

const StyledFooterLogo = styled.div`
    display: flex;
    align-items: center;
`

const StyledFooterLinks = styled.div`
    display: flex;
    align-items: center;
`

const StyledFooterLink = styled.a`
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    :hover {
        text-decoration: underline;
    }
`