export interface Props {
    eraData: [];
    loginData: [];
    isLoading: boolean;
    error?: boolean;
    classes: any;
    loginErrorMessage?: string;
    playersListView: boolean;
    playersListLoading: boolean;
    eraLoading: boolean;
    yearDataLoading: boolean;
    showPlayerCards: boolean;
    updatePlayersListView: (playersListView: boolean) => void;
    playerCardLoading: boolean;
    showNoDataView: boolean;
    match: any;
  }
  
export interface State {
  }