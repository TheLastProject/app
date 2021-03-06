import * as React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter, push} from 'connected-react-router'

import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {backgroundSelectedColor} from '../components/styles'

import Main from './main'

import {store, history} from '../store/index'

const theme = createMuiTheme({
  typography: {
    // fontFamily: 'Roboto',
    fontFamily: 'Open Sans',
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        // fontFamily: 'Roboto Mono',
      },
      underline: {
        '&:after': {
          borderBottomColor: `#2196f3`,
          // borderBottomWidth: 1,
        },
        // '&:hover:not($disabled):not($focused):not($error):before': {
        //   borderBottomColor: `black`,
        //   borderBottomWidth: 1,
        // },
      },
    },
    MuiButton: {
      root: {
        // fontFamily: 'Roboto',
        fontSize: 14,
      },
      sizeSmall: {
        fontSize: 12,
      },
      sizeLarge: {
        fontSize: 16,
      },
      outlinedPrimary: {
        'not($disabled)': {
          backgroundColor: fade('#2196f3', 0.05),
        },
      },
      outlinedSecondary: {
        'not($disabled)': {
          backgroundColor: fade('#f50057', 0.05),
        },
      },
    },
    MuiTableRow: {
      root: {
        '&$selected': {
          backgroundColor: backgroundSelectedColor(),
        },
      },
      hover: {
        '&:hover': {
          backgroundColor: '#fafafa !important',
        },
      },
    },
    MuiTabs: {
      root: {
        minHeight: 40,
      },
    },
    MuiTab: {
      root: {
        minHeight: 40,
      },
    },
    // MuiToggleButton: {
    //   root: {
    //     fontFamily: 'Roboto',
    //     fontSize: 14,
    //     backgroundColor: fade('#2196f3', 0.1),
    //   },
    //   sizeSmall: {
    //     fontSize: 12,
    //   },
    //   sizeLarge: {
    //     fontSize: 16,
    //   },
    // },
  },
})

export default class Root extends React.Component {
  // unlisten: any
  // componentDidMount() {
  //   this.unlisten = history.listen((location, action) => {
  //     // console.log('Listen:', location, action)
  //     const route: RouteInfo | void = routesMap.get(location.pathname)
  //     if (route && route.onLocationChange) {
  //       route.onLocationChange(this.props.dispatch)
  //     }
  //   })
  // }
  // componentWillUnmount() {
  //   if (this.unlisten) {
  //     this.unlisten()
  //     this.unlisten = null
  //   }
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Main />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    )
  }
}
