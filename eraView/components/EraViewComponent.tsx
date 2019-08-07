import React from "react";
import { RouteProps } from "react-router";
import EraListContainer from "../../common/eraList/EraListContainer";
import LeagueContainer from "../../league/LeagueContainer";
import YearContainer from "../../common/yearView/YearContainer";
import TeamContainer from "../../leagueTeam/LeagueTeamContainer";
import PlayersListContainer from "../../team/TeamContainer";
import { StyledHeader, StyledCategoryGrid, LeagueTeamContainer, StyledPaper } from "./EraViewStyle";
import { StyledGrid, StyledLoaderBox } from '../../../shared/components/style';
import { Props, State } from '../EraViewTypes'
import '../../../shared/assets/style.css';
import NodataComponent from '../../../shared/components/NoData';

class EraView extends React.Component<Props & RouteProps, State> {
  static propTypes: {};
  static defaultProps: {};
constructor(props: any) {
  super(props);
  this.state = {
    url: this.props.location,
    teamId: this.props.match.params.teamId
  }
}
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { location, match, updatePlayersListView, playersListLoading } = nextProps;
    const { url } = prevState;
    if(location.pathname !== url.pathname && !match.params.teamId ) {
      updatePlayersListView(false);
    }
    if(location.pathname !== url.pathname && 
      match.params.teamId && !playersListLoading) {
      updatePlayersListView(true);
    }
    return {teamId: match.params.teamId, url: location};
  }
  
  render() {
    const {
      playersListView,
      showNoDataView,
      yearDataLoading,
      eraLoading } = this.props;
    return (
      <StyledHeader>
        <StyledGrid container={true}>
          <StyledGrid item={true} xs={12}>
            <EraListContainer />
          </StyledGrid>

          <StyledCategoryGrid item={true} xs={12} className="pad-0">
            {!playersListView && <YearContainer />}
            {showNoDataView ? <NodataComponent cover={false} /> :
              playersListView ?
                <PlayersListContainer />
                :
                eraLoading || yearDataLoading ?
                  <StyledPaper square={true}>
                    <StyledLoaderBox className="loader" />
                  </StyledPaper> :
                  <LeagueTeamContainer>
                    <LeagueContainer />
                    <TeamContainer />
                  </LeagueTeamContainer>
            }
          </StyledCategoryGrid>
        </StyledGrid>
      </StyledHeader>
    );
  }
}

export default EraView;
