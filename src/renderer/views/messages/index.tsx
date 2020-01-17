import * as React from 'react'

import {Box, Dialog} from '@material-ui/core'

import MessagesHeaderView from './header'
import MessagesListView from './list'
import MessageInputView from '../message-input'

import Selected from './selected'

import {messagePrepare, messageCreate} from '../../rpc/rpc'

import {connect} from 'react-redux'

import {Inbox, Message} from '../../rpc/types'

import {
  MessageCreateRequest,
  MessageCreateResponse,
  MessagePrepareRequest,
  MessagePrepareResponse,
  RPCError,
} from '../../rpc/rpc'

import {MessageRow} from './types'

type Props = {
  inbox: Inbox
  dispatch: (action: any) => any
}

type State = {
  selectedMessage: Message | void
  followOpen?: boolean
  pendingMessage: Message | void
  error: string
}

class MessagesView extends React.Component<Props, State> {
  listRef: any
  state = {
    selectedMessage: null,
    pendingMessage: null,
    error: '',
  }

  setListRef = (ref: any) => {
    this.listRef = ref
  }

  clearError = () => {
    this.setState({
      error: '',
    })
  }

  submitEditing = (text: string): boolean => {
    // TODO: Queue message if already pending or shake an error to signify previous message still pending
    if (this.state.pendingMessage) {
      return false
    }
    const prep: MessagePrepareRequest = {
      kid: this.props.inbox.kid,
      sender: this.props.inbox.kid,
      text,
    }
    this.props.dispatch(
      messagePrepare(
        prep,
        (resp: MessagePrepareResponse) => {
          if (!resp.message) {
            console.error('No message in response')
            return
          }
          const message: Message = resp.message
          this.setState({pendingMessage: resp.message})
          const req: MessageCreateRequest = {
            ...prep,
            id: message.id,
          }

          this.listRef.setPending(resp.message)

          this.props.dispatch(
            messageCreate(req, (resp: MessageCreateResponse) => {
              this.setState({pendingMessage: null})
            })
          )
        },
        (err: RPCError) => {
          this.setState({error: err.details})
        }
      )
    )
    return true
  }

  follow = () => {
    this.setState({followOpen: true})
  }

  render() {
    return (
      <Box display="flex" flex={1}>
        <MessagesListView
          ref={this.setListRef}
          kid={this.props.inbox.kid}
          rowCount={this.props.inbox.messageCount}
          dispatch={this.props.dispatch}
        />
        <MessageInputView
          defaultValue=""
          submitEditing={this.submitEditing}
          error={this.state.error}
          clearError={this.clearError}
        />
      </Box>
    )
  }
}

// $FlowFixMe
export default connect()(MessagesView)