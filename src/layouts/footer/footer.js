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
    padding-top: 10px;
    border-top: 1px ${props => props.theme.tertiary} solid;
    display: flex;
    align-items: center;
    
`
const FooterText = styled.div`

        color: ${props => props.theme.text};
        text-align: center;
        width: 100%;
        padding-bottom: 10px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.text_sec};
            transition: 0.2s;
        }
`
export default Footer;