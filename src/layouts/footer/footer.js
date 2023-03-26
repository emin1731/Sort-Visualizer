import React from 'react';
import styled from 'styled-components'
import './footer.css'

function Footer() {
    return (
        <div>
                <FooterContainer>
                    <FooterText href='https://github.com/emin1731/implementation-of-algorithms' target="_blank">github.com/emin1731/implementation-of-algorithms</FooterText>
                </FooterContainer>
        </div>
    );
}

const FooterContainer = styled.div`
    height: 36px;
    padding-top: 5px;
    border-top: 1px ${props => props.theme.tertiary} solid;
    text-align: center;
    
`
const FooterText = styled.a`

        color: ${props => props.theme.text};
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.text_sec};
            transition: 0.2s;
        }
`
export default Footer;