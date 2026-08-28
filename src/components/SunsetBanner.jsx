/*
 * Banner for displaying information about the sunsetting of this site.
 */

import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import breakpoints from '../lib/breakpoints';

const SunsetBannerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 128px;
    padding: 24px;
    background-color: #f6b8bd;
    color: #430207;
    @media (max-width: ${breakpoints[0]}px) {
        padding: 16px;
    }
`;

const IconContainer = styled.div`
    font-size: 72px;
    @media (max-width: ${breakpoints[0]}px) {
        font-size: 56px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 64rem;
    color: #430207;
`

const Header = styled.h3`
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    color: #430207;
`

const Paragraph = styled.p`
    margin: 0;
    font-size: 16px;
`

const Link = styled.a`
    color: #430207;
    font-weight: bolder;
    text-decoration: underline;
`

export default function SunsetBanner() {
    return (
        <SunsetBannerContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </IconContainer>
            <TextContainer>
                <Header>
                    This site has been sunsetted!
                </Header>
                <Paragraph>
                    This is Rob's legacy OSU site.  It contains information about courses taught through spring of 2026.
                </Paragraph>
                <Paragraph>
                    For information about courses taught after spring of 2026, please see Rob's current OSU website at <Link href="https://robwhess.com">https://robwhess.com</Link>.
                </Paragraph>
            </TextContainer>
        </SunsetBannerContainer>
    )
}
