import { connect } from 'react-redux';

import EraView from './components/EraViewComponent';
import { updatePlayersListView } from '../team/TeamAction'
import { Dispatch } from 'redux';
import { StoreState } from '../../types';

const mapStateToProps = (state: StoreState) => ({
  eraLoading: state.eraList.isLoading,
  playersListLoading: state.player.isLoading,
  yearDataLoading: state.year.isLoading,
  playersListView: state.player.playersListView,
  showPlayerCards: state.playerCard.showPlayerCards,
  playerCardLoading: state.playerCard.isLoading,
  showNoDataView: state.year.showNoDataView,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updatePlayersListView: (playersListView: boolean) => dispatch(updatePlayersListView(playersListView)),
});

const EraViewContainer: React.ComponentClass<any> =
  connect(mapStateToProps, mapDispatchToProps)(EraView)
  
export default EraViewContainer;