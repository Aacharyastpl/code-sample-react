import styled from 'styled-components'
import { space, themeGet } from 'styled-system'
import { Box, Flex } from 'grid-styled'

export const DashboardHeading = styled.h1`
  color: ${themeGet('colors.primary')};
  font-family: ${themeGet('fonts.primary')};
  font-size: 32px;
  font-weight: 400;
`

export const AnnouncementHeading = DashboardHeading.extend`
  ${space};

  @media (max-width: 1200px) {
    margin-left: 30px;
  }

  @media (min-width: 1081px) AND (max-width: 1200px) {
    margin-left: 70px;
  }
`

export const Divider = styled(Box)`
  ${space};
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 70px;
  margin-right: 70px;

  @media (min-width: 1081px) AND (max-width: 1200px) {
    margin-left: 70px;
  }

  @media (max-width: 1080px) {
    margin-left: 30px;
  }

  @media (max-width: 1025px) {
    box-shadow: 1px 1px 2px 2px ${themeGet('colors.shadow')};
  }

  @media (min-width: 1025px) {
    box-shadow: 1px 1px 2px 2px ${themeGet('colors.shadow')};
  }
`

export const BagBox = styled(Box)`
  ${space};
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 70px;
`

export const DashboardFlex = styled(Flex)`
  flex-direction: row-reverse;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`
