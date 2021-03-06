import * as React from 'react'

import {Button, Divider, Input, Box, Snackbar, SnackbarContent} from '@material-ui/core'

import {decrypt, RPCError} from '../../rpc/keys'

import SignerView from '../verify/signer'

import {clipboard} from 'electron'
import {debounce} from 'lodash'

import {Key, DecryptRequest, DecryptResponse} from '../../rpc/keys.d'
import {CSSProperties} from '@material-ui/styles'

export type Props = {
  value: string
}

type State = {
  decrypted: string
  sender: Key
  error: string
  openSnack: boolean
}

export default class DecryptedView extends React.Component<Props, State> {
  state = {
    decrypted: '',
    error: '',
    sender: null,
    openSnack: false,
  }

  debounceDecrypt = debounce(() => this.decrypt(), 10)

  componentDidMount() {
    this.decrypt()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.value != prevProps.value) {
      this.debounceDecrypt()
    }
  }

  decrypt = () => {
    this.setState({error: '', sender: null, decrypted: ''})

    if (this.props.value == '') return

    const data = new TextEncoder().encode(this.props.value)
    const req: DecryptRequest = {
      data: data,
      armored: true,
    }
    decrypt(req, (err: RPCError, resp: DecryptResponse) => {
      if (err) {
        this.setState({error: err.details})
        return
      }
      const decrypted = new TextDecoder().decode(resp.data)
      this.setState({error: '', sender: resp.sender, decrypted: decrypted})
    })
  }

  copyToClipboard = () => {
    clipboard.writeText(this.state.decrypted)
    this.setState({openSnack: true})
  }

  render() {
    let value = ''
    let stylesInput: CSSProperties = {}
    let unsigned
    const disabled = !this.state.decrypted
    if (this.state.error == 'unexpected EOF') {
      value = ''
    } else if (this.state.error) {
      value = this.state.error
      stylesInput.color = 'red'
    } else {
      value = this.state.decrypted
      unsigned = !disabled && !this.state.sender
    }

    return (
      <Box display="flex" flexDirection="column" flex={1} style={{height: '100%'}}>
        <SignerView signer={this.state.sender} unsigned={unsigned} />
        <Divider />
        <Input
          multiline
          readOnly
          value={value}
          disableUnderline
          inputProps={{
            style: {
              ...stylesInput,
              height: '100%',
              overflow: 'auto',
              paddingTop: 8,
              paddingLeft: 8,
              paddingBottom: 0,
              paddingRight: 0,
            },
          }}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <Box style={{position: 'absolute', right: 20, bottom: 6}}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            disabled={disabled}
            onClick={this.copyToClipboard}
            style={{backgroundColor: 'white'}}
          >
            Copy to Clipboard
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          open={this.state.openSnack}
          autoHideDuration={2000}
          onClose={() =>
            this.setState({
              openSnack: false,
            })
          }
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={<span id="client-snackbar">Copied to Clipboard</span>}
          />
        </Snackbar>
      </Box>
    )
  }
}
