# keys.pub

[![GoDoc](https://godoc.org/github.com/keys-pub/keys?status.svg)](https://godoc.org/github.com/keys-pub/keys)

☢ This project is in development and has not been audited or reviewed. Use at your own risk. ☢

## Documentation

Visit **[keys.pub](https://keys.pub)**.

## Repositories

|                                                     |                                                                                                                                                                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [keys-pub/keys](https://github.com/keys-pub/keys)   | Cryptographic key management, signing and encryption, including [keys/saltpack](https://godoc.org/github.com/keys-pub/keys/saltpack) and [keys/keyring](https://godoc.org/github.com/keys-pub/keys/keyring). |
| [keys-pub/keysd](https://github.com/keys-pub/keysd) | Service (gRPC), command line client, DB, Firestore, REST API, etc.                                                                                                                                           |
| [keys-pub/app](https://github.com/keys-pub/app)     | Desktop app (in development).                                                                                                                                                                                |  |

## Development

### Install

```shell
yarn install
```

### Run

```shell
yarn start-dev
```

### Running Another Instance

To run a second instance that connects to different service:

```console
KEYS_PORT=10002 KEYS_APP=Keys2 yarn start-dev

# Run a service on that port and app
keysd -port=10002 -app=Keys2
```
