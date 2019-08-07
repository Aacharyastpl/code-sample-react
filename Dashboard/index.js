// Dashboard
import React, { Component } from 'react'
import { Flex } from 'grid-styled'
import {
  AnnouncementHeading,
  BagBox,
  DashboardHeading,
  Divider,
  DashboardFlex
} from './styles'

import { Query } from 'react-apollo'
import GET_BAGNUM from './queries'
import store from 'store'

import Announcement from '../Announcement'
import Home from '../Home'

class Dashboard extends Component {
  render() {
    return (
      <Flex flexDirection="column">
        <DashboardFlex>
          <Flex flexDirection="column">
            <AnnouncementHeading ml={['30px', '0px', '0px']}>
              Announcements
            </AnnouncementHeading>
            <Divider
              width={[1, 'auto', '650px']}
              ml={['30px', '30px', '0px']}
              mr={['30px', '30px', '70px']}
            >
              <Announcement />
            </Divider>
          </Flex>
          <BagBox width={[1, 4 / 5, 1 / 2]} ml={['30px', '30px', '70px']}>
            <Query
              query={GET_BAGNUM}
              variables={{
                token: store.get('user').token
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                const {
                  me: {
                    bag: { items }
                  }
                } = data

                if (items.length > 1)
                  return <DashboardHeading> My Bags </DashboardHeading>
                return <DashboardHeading> My Bag </DashboardHeading>
              }}
            </Query>
            <Home />
          </BagBox>
        </DashboardFlex>
      </Flex>
    )
  }
}

export default Dashboard
