// Code generated by protoc-gen-tsrpc DO NOT EDIT.
// InputID: aa996c74cbb5c83410129cfdd9bb79581cc4bcea
import {ipcRenderer} from 'electron'
import {randomBytes} from 'crypto'

import {
  DevicesRequest,
  DevicesResponse,
  DeviceInfoRequest,
  DeviceInfoResponse,
  MakeCredentialRequest,
  MakeCredentialResponse,
  SetPINRequest,
  SetPINResponse,
  ResetRequest,
  ResetResponse,
  RetryCountRequest,
  RetryCountResponse,
  AssertionRequest,
  AssertionResponse,
  CredentialsInfoRequest,
  CredentialsInfoResponse,
  CredentialsRequest,
  CredentialsResponse,
  RelyingPartiesRequest,
  RelyingPartiesResponse,
} from './fido2.d'

export interface RPCError {
  code?: number
  message?: string
  details?: string
}

const replyID = (): string => {
  return randomBytes(20).toString('hex')
}

export type ErrHandler = (err: RPCError) => void
var errHandler: ErrHandler = (err: RPCError) => {}
export const setErrHandler = (eh: ErrHandler) => {
  errHandler = eh
}

export const devices = (req: DevicesRequest, cb: (err: RPCError, resp: DevicesResponse) => void) => {
  const reply = 'Authenticators.Devices-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.Devices):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.Devices) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.Devices)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'Devices', args: req, reply: reply})
}

export const deviceInfo = (req: DeviceInfoRequest, cb: (err: RPCError, resp: DeviceInfoResponse) => void) => {
  const reply = 'Authenticators.DeviceInfo-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.DeviceInfo):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.DeviceInfo) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.DeviceInfo)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'DeviceInfo', args: req, reply: reply})
}

export const makeCredential = (
  req: MakeCredentialRequest,
  cb: (err: RPCError, resp: MakeCredentialResponse) => void
) => {
  const reply = 'Authenticators.MakeCredential-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.MakeCredential):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.MakeCredential) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.MakeCredential)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'MakeCredential', args: req, reply: reply})
}

export const setPIN = (req: SetPINRequest, cb: (err: RPCError, resp: SetPINResponse) => void) => {
  const reply = 'Authenticators.SetPIN-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.SetPIN):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.SetPIN) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.SetPIN)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'SetPIN', args: req, reply: reply})
}

export const reset = (req: ResetRequest, cb: (err: RPCError, resp: ResetResponse) => void) => {
  const reply = 'Authenticators.Reset-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.Reset):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.Reset) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.Reset)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'Reset', args: req, reply: reply})
}

export const retryCount = (req: RetryCountRequest, cb: (err: RPCError, resp: RetryCountResponse) => void) => {
  const reply = 'Authenticators.RetryCount-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.RetryCount):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.RetryCount) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.RetryCount)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'RetryCount', args: req, reply: reply})
}

export const assertion = (req: AssertionRequest, cb: (err: RPCError, resp: AssertionResponse) => void) => {
  const reply = 'Authenticators.Assertion-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.Assertion):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.Assertion) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.Assertion)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'Assertion', args: req, reply: reply})
}

export const credentialsInfo = (
  req: CredentialsInfoRequest,
  cb: (err: RPCError, resp: CredentialsInfoResponse) => void
) => {
  const reply = 'Authenticators.CredentialsInfo-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.CredentialsInfo):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.CredentialsInfo) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.CredentialsInfo)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'CredentialsInfo', args: req, reply: reply})
}

export const credentials = (
  req: CredentialsRequest,
  cb: (err: RPCError, resp: CredentialsResponse) => void
) => {
  const reply = 'Authenticators.Credentials-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.Credentials):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.Credentials) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.Credentials)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'Credentials', args: req, reply: reply})
}

export const relyingParties = (
  req: RelyingPartiesRequest,
  cb: (err: RPCError, resp: RelyingPartiesResponse) => void
) => {
  const reply = 'Authenticators.RelyingParties-' + replyID()
  ipcRenderer.on(reply, (event, arg) => {
    ipcRenderer.removeAllListeners(reply)
    if (arg.err) {
      console.error('RPC error (Authenticators.RelyingParties):', arg.err)
      errHandler(arg.err)
    } else {
      console.log('RPC (Authenticators.RelyingParties) done')
    }
    cb(arg.err, arg.resp)
  })
  console.log('RPC (Authenticators.RelyingParties)...')
  ipcRenderer.send('rpc', {service: 'Authenticators', method: 'RelyingParties', args: req, reply: reply})
}
