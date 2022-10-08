import styled from 'styled-components'
import Logo from '../Logo'


export default function Footer() {
    return (
        <StyledFooter>
            <StyledFooterContent>
                <StyledFooterLogo>
                    <Logo />
                </StyledFooterLogo>
                {/* <StyledFooterLinks>
                    <StyledFooterLink href='' target='_blank'>About</StyledFooterLink>
                    <StyledFooterLink href='' target='_blank'>Contact</StyledFooterLink>
                    <StyledFooterLink href='' target='_blank'>Terms of Service</StyledFooterLink>
                    <StyledFooterLink href='' target='_blank'>Privacy Policy</StyledFooterLink>
                </StyledFooterLinks> */}
            </StyledFooterContent>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #4158D0;
`
const StyledFooterContent = styled.div`
    display: flex;
    justify-content: space-between;
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