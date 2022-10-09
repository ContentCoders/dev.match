import * as React from "react";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import Logo from "../Logo";
import styled from 'styled-components'

export default function Navbar() {
    return (
        <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem><Logo /></StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                {/* <StyledNavigationItem>
                    <StyledPrimaryButton>Sign Up</StyledPrimaryButton>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledSecondaryButton className='secondary'>Login</StyledSecondaryButton>
                </StyledNavigationItem> */}
            </StyledNavigationList>
        </HeaderNavigation>
    );
}

const StyledPrimaryButton = styled(Button)`
    background-color: #C850C0;
    border: 3px solid #C850C0;
    :hover {
        background-color: transparent;
        color: #C850C0;
    }
`

const StyledSecondaryButton = styled(Button)`
    background-color: transparent;
    border: 3px solid #C850C0;
    color: #C850C0;
    :hover {
        background-color: #C850C0;
        color: #fff;
    }
`