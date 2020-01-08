/* @flow */
/* eslint-disable */
// Code generated by protoc-gen-flowtypes DO NOT EDIT.
// InputID: 03d83b1489eb4704861742aabed64343452cf1e6


export type KeyType = "NO_KEY_TYPE" | "PUBLIC_KEY_TYPE" | "PRIVATE_KEY_TYPE";

export type SortDirection = "ASC" | "DESC";

export type Encoding = "HEX" | "BASE62" | "BASE58" | "BASE32" | "BASE16" | "BASE64" | "SALTPACK" | "BIP39";

export type UserStatus = "UNKNOWN" | "OK" | "RESOURCE_NOT_FOUND" | "CONTENT_NOT_FOUND" | "CONN_FAILURE" | "FAILURE";

export type WatchStatus = "NO_STATUS" | "OUTAGE" | "DISRUPTED" | "STARTING" | "DATA";

export type SignRequest = {
  data?: string,
  kid: string,
  armored: boolean,
  detached: boolean
};

export type SignResponse = {
  data?: string,
  kid: string
};

export type VerifyRequest = {
  data?: string,
  armored: boolean
};

export type VerifyResponse = {
  data?: string,
  kid: string
};

export type Statement = {
  sig?: string,
  data?: string,
  kid: string,
  seq: number,
  prev?: string,
  revoke: number,
  timestamp: number,
  type: string
};

export type SigchainRequest = {
  kid: string,
  check: boolean,
  update: boolean
};

export type SigchainResponse = {
  key: ?Key,
  statements: ?Array<Statement>
};

export type StatementRequest = {
  kid: string,
  seq: number
};

export type StatementResponse = {
  statement: ?Statement
};

export type StatementCreateRequest = {
  data?: string,
  kid: string,
  dryRun: boolean,
  local: boolean
};

export type StatementCreateResponse = {
  statement: ?Statement
};

export type StatementRevokeRequest = {
  seq: number,
  kid: string,
  dryRun: boolean,
  local: boolean
};

export type StatementRevokeResponse = {
  statement: ?Statement
};

export type SignStreamInput = {
  data?: string,
  kid: string,
  armored: boolean,
  detached: boolean
};

export type SignStreamOutput = {
  data?: string,
  kid: string
};

export type VerifyStreamInput = {
  data?: string
};

export type VerifyStreamOutput = {
  data?: string,
  kid: string
};

export type EncryptRequest = {
  data?: string,
  armored: boolean,
  recipients: string,
  sender: string
};

export type EncryptResponse = {
  data?: string
};

export type DecryptRequest = {
  data?: string,
  armored: boolean
};

export type DecryptResponse = {
  data?: string,
  sender: string
};

export type EncryptStreamInput = {
  data?: string,
  armored: boolean,
  recipients: string,
  sender: string
};

export type EncryptStreamOutput = {
  data?: string
};

export type DecryptStreamInput = {
  data?: string
};

export type DecryptStreamOutput = {
  data?: string,
  sender: string
};

export type RuntimeStatusRequest = {

};

export type RuntimeStatusResponse = {
  version: string,
  exe: string,
  authSetupNeeded: boolean
};

export type AuthGenerateRequest = {
  password: string
};

export type AuthGenerateResponse = {
  keyBackup: string
};

export type AuthSetupRequest = {
  password: string,
  keyBackup: string,
  clientName: string
};

export type AuthSetupResponse = {
  kid: string,
  authToken: string
};

export type AuthUnlockRequest = {
  password: string,
  client: string
};

export type AuthUnlockResponse = {
  authToken: string
};

export type AuthLockRequest = {

};

export type AuthLockResponse = {

};

export type KeyGenerateRequest = {

};

export type KeyGenerateResponse = {
  kid: string
};

export type UserServiceRequest = {
  kid: string,
  service: string
};

export type UserServiceResponse = {
  service: string
};

export type UserSignRequest = {
  kid: string,
  service: string,
  name: string
};

export type UserSignResponse = {
  message: string,
  name: string
};

export type UserAddRequest = {
  kid: string,
  service: string,
  name: string,
  url: string
};

export type UserAddResponse = {
  user: ?User,
  statement: ?Statement
};

export type KeyBackupRequest = {
  kid: string
};

export type KeyBackupResponse = {
  seedPhrase: string
};

export type KeyRecoverRequest = {
  seedPhrase: string
};

export type KeyRecoverResponse = {
  kid: string
};

export type KeyRemoveRequest = {
  kid: string,
  seedPhrase: string
};

export type KeyRemoveResponse = {

};

export type Key = {
  id: string,
  type?: KeyType,
  users: ?Array<User>,
  saved: boolean,
  createdAt: number,
  publishedAt: number,
  savedAt: number,
  updatedAt: number
};

export type KeyRequest = {
  kid: string,
  user: string
};

export type KeyResponse = {
  key: ?Key
};

export type KeysRequest = {
  query: string,
  sortField: string,
  sortDirection?: SortDirection
};

export type KeysResponse = {
  keys: ?Array<Key>,
  sortField: string,
  sortDirection?: SortDirection
};

export type ItemRequest = {
  id: string
};

export type ItemResponse = {
  item: ?Item
};

export type ItemsRequest = {
  query: string
};

export type ItemsResponse = {
  items: ?Array<Item>
};

export type Item = {
  id: string,
  type: string
};

export type RandRequest = {
  length: number,
  encoding?: Encoding
};

export type RandResponse = {
  data: string
};

export type StatusRequest = {

};

export type StatusResponse = {
  uri: string,
  key: ?Key,
  promptPublish: boolean,
  promptUser: boolean
};

export type PullRequest = {
  kid: string,
  user: string,
  all: boolean
};

export type PullResponse = {
  kids: Array<string>
};

export type PushRequest = {
  kid: string
};

export type PushResponse = {
  kid: string,
  urls: Array<string>
};

export type KeyShareRequest = {
  kid: string,
  recipient: string
};

export type KeyShareResponse = {

};

export type KeyRetrieveRequest = {
  kid: string,
  recipient: string
};

export type KeyRetrieveResponse = {

};

export type Collection = {
  path: string
};

export type CollectionsRequest = {
  path: string
};

export type CollectionsResponse = {
  collections: ?Array<Collection>
};

export type Document = {
  path: string,
  value: string,
  createdAt: number,
  updatedAt: number
};

export type DocumentsRequest = {
  path: string,
  prefix: string
};

export type DocumentsResponse = {
  documents: ?Array<Document>
};

export type DocumentDeleteRequest = {
  path: string
};

export type DocumentDeleteResponse = {

};

export type User = {
  name: string,
  kid: string,
  seq: number,
  service: string,
  url: string,
  status?: UserStatus,
  verifiedAt: number,
  err: string
};

export type SearchResult = {
  kid: string,
  users: ?Array<User>
};

export type SearchRequest = {
  query: string,
  index: number,
  limit: number
};

export type SearchResponse = {
  results: ?Array<SearchResult>
};

export type WatchRequest = {

};

export type WatchEvent = {
  status?: WatchStatus,
  path: string
};

export type ConfigRequest = {

};

export type ConfigResponse = {
  config: ?Array<ConfigResponseConfigEntry>
};

export type ConfigResponseConfigEntry = {
  key: string,
  value: string
};

export type ConfigSetRequest = {
  key: string,
  value: string
};

export type ConfigSetResponse = {

};

export type Inbox = {
  kid: string,
  name: string,
  createdAt: number,
  messageCount: number,
  snippet: string,
  error: string
};

export type InboxRequest = {

};

export type InboxResponse = {
  inboxes: ?Array<Inbox>
};

export type Message = {
  id: string,
  sender: string,
  content: ?MessageContent,
  user: ?User,
  createdAt: number,
  timeDisplay: string,
  dateDisplay: string,
  path: string
};

export type MessageContent = {
  text: string
};

export type MessagePrepareRequest = {
  kid: string,
  sender: string,
  text: string
};

export type MessagePrepareResponse = {
  message: ?Message
};

export type MessageCreateRequest = {
  kid: string,
  sender: string,
  id: string,
  text: string
};

export type MessageCreateResponse = {
  message: ?Message
};

export type MessagesRequest = {
  kid: string
};

export type MessagesResponse = {
  messages: ?Array<Message>
};


