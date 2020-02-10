import * as React from 'react'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core'

import {styles, Step} from '../../components'

import {store} from '../../store'
import {goBack, push, replace} from 'connected-react-router'

import {keyImport, RPCError} from '../../rpc/rpc'
import {KeyImportRequest, KeyImportResponse} from '../../rpc/types'

type Props = {
  open: boolean
  close: (imported: boolean) => void
}

type State = {
  in: string
  password: string
  error: string
}

export default class KeyImportDialog extends React.Component<Props, State> {
  state = {
    in: '',
    password: '',
    error: '',
  }

  importKey = () => {
    const input = new TextEncoder().encode(this.state.in)
    const req: KeyImportRequest = {
      in: input,
      password: this.state.password,
    }
    store.dispatch(
      keyImport(
        req,
        (resp: KeyImportResponse) => {
          this.props.close(true)
        },
        (err: RPCError) => {
          this.setState({error: err.details})
        }
      )
    )
  }

  onInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    this.setState({in: target.value, error: ''})
  }

  onPasswordInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    this.setState({password: target.value, error: ''})
  }

  render() {
    return (
      <Dialog
        onClose={() => this.props.close(false)}
        open={this.props.open}
        maxWidth="sm"
        fullWidth
        disableBackdropClick
        // TransitionComponent={transition}
        // keepMounted
      >
        <DialogTitle>Import Key</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column">
            <Typography style={{paddingBottom: 20}}>
              You can specify an key or a key ID and password (if encrypted).
            </Typography>
            <FormControl error={this.state.error !== ''} style={{marginBottom: 20}}>
              <TextField
                multiline
                autoFocus
                label="Import Key"
                rows={6}
                variant="outlined"
                placeholder={''}
                onChange={this.onInputChange}
                value={this.state.in}
                InputProps={{
                  style: {...styles.mono},
                }}
              />
            </FormControl>
            <FormControl error={this.state.error !== ''}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                onChange={this.onPasswordInputChange}
                value={this.state.password}
              />
              <FormHelperText id="component-error-text">{this.state.error}</FormHelperText>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.close(false)}>Close</Button>
          <Button color="primary" onClick={this.importKey}>
            Import
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}