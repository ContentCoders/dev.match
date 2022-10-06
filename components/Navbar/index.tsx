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
import { styled } from 'styletron-react'

export default function Navbar() {
    return (
        <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem><Logo /></StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <StyledButton>Sign Up</StyledButton>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledButton className='secondary'>Login</StyledButton>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    );
}

const StyledButton = styled(Button, {
    width: '120px',
    '.secondary': {
        background: 'transparent',
        border: '3px solid black'
    }
})