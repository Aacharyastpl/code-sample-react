import React from 'react'
import styled from 'styled-components'
import Grid, { GridProps } from '@material-ui/core/Grid';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { fade } from '@material-ui/core/styles/colorManipulator';


export const StyledHeader = styled.div`
  flex-grow: 1`;

export const StyledCategoryGrid = styled(Grid)`
  font-size: 22px;
  margin-top: 30px;
  padding: 0px 100px 0px 100px;` as React.ComponentType<GridProps>;

export const LeagueTeamContainer = styled.div`
  display: flex;
  background: ${({theme}: any) => fade(theme.palette.background.default, 0.9)};  
  border-top: 5px solid ${({theme}: any) => theme.palette.secondary.main};

  @media (max-width: 768px) {
    flex-direction: column;
    background: transparent;
    border-top: 0;
  }
`;

export const StyledPaper = styled(Paper)`
  width: 100%;
  background: rgba(49, 14, 24, 0.9) !important;
  overflow-x: auto;
  box-shadow: none !important;
  border-top: 5px solid ${({theme}: any) => theme.palette.secondary.main}; 
  position: relative;
  min-height: calc(100vh - 244px);

  @media (max-width: 768px) {
    min-height: calc(100vh - 164px);
  }

  @media (max-width: 480px) {
    min-height: calc(100vh - 128px) !important;
  }

  @media only screen 
  and (max-device-width: 812px) 
  and (orientation: landscape) {
    min-height: auto;
  }


  & > div > div {
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      
      ::-webkit-scrollbar-track {
        background: #121729; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #db0040; 
      }

      ::-webkit-scrollbar-corner {        
        background-color: #121729;
    }

    height: calc(100vh - 380px) !important;

    @media (max-width: 768px) {
        height: calc(100vh - 310px) !important;
    }

    @media (max-width: 480px) {
        height: calc(100vh - 220px) !important;
    }

    @media only screen 
    and (max-device-width: 812px) 
    and (orientation: landscape) {
      height: auto !important;
    }
  }
  
  table {
    background: transparent !important;

    th, td {
        border-bottom: 0 !important;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        border-right: 0 !important;
        padding: 0 0 0 15px;
        white-space: nowrap;

        span {
            &:focus,
            &:active {
                color: rgba(255, 255, 255, 0.87) !important;
            }
        }
    }

        background-color: rgba(8, 11, 21, 0.6) !important;
        border-bottom: 2px solid rgba(49, 14, 24, 0.7) !important; 
    }

    
    thead th {
        font-size: 13px;
        color: #a4adce;
        background: rgba(49, 14, 24, 0.9) !important;

        &:first-child {
            padding-left: 40px;
        }

        &:hover, & span:hover {
            color: #fff !important;
        }
    }
    
    thead tr {
        height: 25px;
    }
  }` as React.ComponentType<PaperProps>;
