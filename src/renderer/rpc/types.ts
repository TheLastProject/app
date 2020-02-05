// Code generated by protoc-gen-tstypes. DO NOT EDIT.

export enum EncryptMode {
    DEFAULT_ENCRYPT_MODE = "DEFAULT_ENCRYPT_MODE",
    ENCRYPT_V2 = "ENCRYPT_V2",
    SIGNCRYPT_V1 = "SIGNCRYPT_V1",
}
export enum ExportType {
    DEFAULT_EXPORT_TYPE = "DEFAULT_EXPORT_TYPE",
    SALTPACK_EXPORT_TYPE = "SALTPACK_EXPORT_TYPE",
}
export enum KeyType {
    UNKNOWN_KEY_TYPE = "UNKNOWN_KEY_TYPE",
    EDX25519 = "EDX25519",
    EDX25519_PUBLIC = "EDX25519_PUBLIC",
    X25519 = "X25519",
    X25519_PUBLIC = "X25519_PUBLIC",
}
export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC",
}
export enum Encoding {
    HEX = "HEX",
    BASE62 = "BASE62",
    BASE58 = "BASE58",
    BASE32 = "BASE32",
    BASE16 = "BASE16",
    BASE64 = "BASE64",
    SALTPACK = "SALTPACK",
    BIP39 = "BIP39",
}
export enum UserStatus {
    UNKNOWN = "UNKNOWN",
    OK = "OK",
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
    CONTENT_NOT_FOUND = "CONTENT_NOT_FOUND",
    CONN_FAILURE = "CONN_FAILURE",
    FAILURE = "FAILURE",
}
export enum WatchStatus {
    NO_STATUS = "NO_STATUS",
    OUTAGE = "OUTAGE",
    DISRUPTED = "DISRUPTED",
    STARTING = "STARTING",
    DATA = "DATA",
}
export interface SignRequest {
    data?: Uint8Array;
    // KID to sign with. Optional, if current key is set.
    kid?: string;
    // Armored, if true, output will be armored.
    armored?: boolean;
    // Detached, if true, output will be just the signature.
    detached?: boolean;
}

export interface SignResponse {
    // Data is signed output.
    data?: Uint8Array;
    // KID to signed with.
    kid?: string;
}

export interface VerifyRequest {
    // Data is verified output.
    data?: Uint8Array;
    // Armored, if true, output will be armored.
    armored?: boolean;
}

export interface VerifyResponse {
    data?: Uint8Array;
    signer?: Key;
}

export interface Statement {
    // Sig is the signature bytes.
    sig?: Uint8Array;
    // Data that was signed.
    data?: Uint8Array;
    // KID is the key that signed.
    kid?: string;
    // Seq in a sigchain (1 is root).
    seq?: number;
    // Prev is a hash of the previous item in the sigchain.
    prev?: Uint8Array;
    // Revoke refers to a previous signed seq to revoke.
    revoke?: number;
    // Timestamp ...
    timestamp?: number;
    // Type (optional).
    type?: string;
}

export interface SigchainRequest {
    kid?: string;
}

export interface SigchainResponse {
    key?: Key;
    statements?: Array<Statement>;
}

export interface StatementRequest {
    kid?: string;
    seq?: number;
}

export interface StatementResponse {
    statement?: Statement;
}

export interface StatementCreateRequest {
    data?: Uint8Array;
    // KID to sign with. Optional, if current key is set.
    kid?: string;
    // Local, if true, won't save to the current key server.
    local?: boolean;
}

export interface StatementCreateResponse {
    statement?: Statement;
}

export interface StatementRevokeRequest {
    // Seq to revoke.
    seq?: number;
    // KID to sign with. Optional, if current key is set.
    kid?: string;
    // Local, if true, won't save to the current key server.
    local?: boolean;
}

export interface StatementRevokeResponse {
    statement?: Statement;
}

export interface SignStreamInput {
    data?: Uint8Array;
    // KID to sign with. Optional, if current key is set.
    kid?: string;
    // Armored, if true, output will be armored.
    armored?: boolean;
    // Detached, if true, output will be just the signature.
    detached?: boolean;
}

export interface SignStreamOutput {
    // Data, signed.
    data?: Uint8Array;
    // KID of who signed.
    kid?: string;
}

export interface VerifyStreamInput {
    // Data to verify.
    data?: Uint8Array;
}

export interface VerifyStreamOutput {
    // Data, verified. If empty, is EOF.
    data?: Uint8Array;
    signer?: Key;
}

export interface EncryptRequest {
    // Data to encrypt.
    data?: Uint8Array;
    // Armored, if true will return armored string output.
    armored?: boolean;
    // Recipients to encrypt to.
    recipients?: Array<string>;
    // Sender to sign as. Or empty, if anonymous.
    sender?: string;
    // Mode is the encryption mode.
    mode?: EncryptMode;
}

export interface EncryptResponse {
    data?: Uint8Array;
}

export interface DecryptRequest {
    // Data to decrypt.
    data?: Uint8Array;
    // Armored, if true will return armored string output.
    armored?: boolean;
    // Mode is the encryption mode.
    mode?: EncryptMode;
}

export interface DecryptResponse {
    data?: Uint8Array;
    sender?: Key;
}

export interface EncryptStreamInput {
    // Data to encrypt. Send empty byte slice as last message.
    data?: Uint8Array;
    // Armored, if true will return armored string output.
    armored?: boolean;
    // Recipients to encrypt to.
    recipients?: Array<string>;
    // Sender to sign as. Or empty, if anonymous.
    sender?: string;
    // Mode is the encryption mode.
    mode?: EncryptMode;
}

export interface EncryptStreamOutput {
    // Data, encrypted.
    data?: Uint8Array;
}

export interface DecryptStreamInput {
    // Data, encrypted.
    data?: Uint8Array;
}

export interface DecryptStreamOutput {
    // Data, decrypted. If empty, is EOF.
    data?: Uint8Array;
    sender?: Key;
}

export interface RuntimeStatusRequest {
}

export interface RuntimeStatusResponse {
    // Version of running service.
    version?: string;
    // Exe is the service executable path.
    exe?: string;
    // AuthSetupNeeded if auth needs to be setup.
    authSetupNeeded?: boolean;
}

export interface AuthSetupRequest {
    // Password used to encrypt key backup.
    password?: string;
    // Client name.
    client?: string;
}

export interface AuthSetupResponse {
    authToken?: string;
}

export interface AuthUnlockRequest {
    // Password.
    password?: string;
    // Client name.
    client?: string;
}

export interface AuthUnlockResponse {
    // AuthToken to use for requests.
    authToken?: string;
}

export interface AuthLockRequest {
}

export interface AuthLockResponse {
}

export interface KeyGenerateRequest {
    type?: KeyType;
}

export interface KeyGenerateResponse {
    kid?: string;
}

export interface UserServiceRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
}

export interface UserServiceResponse {
    // Service such as twitter, github.
    service?: string;
}

export interface UserSignRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
    // Name is username on the service.
    name?: string;
}

export interface UserSignResponse {
    // Message is signed message.
    message?: string;
    // Name in request.
    name?: string;
}

export interface UserAddRequest {
    // KID to use, or if empty the current key.
    kid?: string;
    // Service such as twitter, github.
    service?: string;
    // Name is username on the service.
    name?: string;
    // URL is location of signed message on the service.
    url?: string;
    // Local, if true, won't save to the current key server.
    local?: boolean;
}

export interface UserAddResponse {
    user?: User;
    statement?: Statement;
}

export interface KeyExportRequest {
    kid?: string;
    password?: string;
    type?: ExportType;
}

export interface KeyExportResponse {
    export?: Uint8Array;
}

export interface KeyImportRequest {
    in?: Uint8Array;
    password?: string;
}

export interface KeyImportResponse {
    kid?: string;
}

export interface KeyRemoveRequest {
    // KID of key to remove.
    kid?: string;
}

export interface KeyRemoveResponse {
}

export interface Key {
    // ID identifier.
    id?: string;
    // Type of key.
    type?: KeyType;
    // User associated with this key.
    user?: User;
    // Saved if saved locally.
    saved?: boolean;
}

export interface KeyRequest {
    kid?: string;
    user?: string;
    update?: boolean;
}

export interface KeyResponse {
    key?: Key;
}

export interface KeysRequest {
    query?: string;
    types?: Array<KeyType>;
    sortField?: string;
    sortDirection?: SortDirection;
}

export interface KeysResponse {
    keys?: Array<Key>;
    sortField?: string;
    sortDirection?: SortDirection;
}

export interface ItemRequest {
    id?: string;
}

export interface ItemResponse {
    item?: Item;
}

export interface ItemsRequest {
    query?: string;
}

export interface ItemsResponse {
    items?: Array<Item>;
}

export interface Item {
    id?: string;
    type?: string;
}

export interface RandRequest {
    length?: number;
    encoding?: Encoding;
}

export interface RandResponse {
    data?: string;
}

export interface PullRequest {
    kid?: string;
    user?: string;
}

export interface PullResponse {
    kids?: Array<string>;
}

export interface PushRequest {
    kid?: string;
}

export interface PushResponse {
    kid?: string;
    urls?: Array<string>;
}

export interface KeyShareRequest {
    kid?: string;
    recipient?: string;
}

export interface KeyShareResponse {
}

export interface KeyRetrieveRequest {
    kid?: string;
    recipient?: string;
}

export interface KeyRetrieveResponse {
}

export interface Collection {
    path?: string;
}

export interface CollectionsRequest {
    path?: string;
}

export interface CollectionsResponse {
    collections?: Array<Collection>;
}

export interface Document {
    path?: string;
    value?: string;
    createdAt?: number;
    updatedAt?: number;
}

export interface DocumentsRequest {
    path?: string;
    prefix?: string;
}

export interface DocumentsResponse {
    documents?: Array<Document>;
}

export interface DocumentDeleteRequest {
    path?: string;
}

export interface DocumentDeleteResponse {
}

export interface User {
    name?: string;
    kid?: string;
    seq?: number;
    service?: string;
    url?: string;
    status?: UserStatus;
    verifiedAt?: number;
    err?: string;
    label?: string;
}

export interface UserSearchResult {
    kid?: string;
    user?: User;
}

export interface UserSearchRequest {
    query?: string;
    limit?: number;
    local?: boolean;
}

export interface UserSearchResponse {
    results?: Array<UserSearchResult>;
}

export interface WatchRequest {
}

export interface WatchEvent {
    status?: WatchStatus;
    path?: string;
}

export interface ConfigRequest {
}

export interface ConfigResponse_ConfigEntry {
    key?: string;
    value?: string;
}

export interface ConfigResponse {
    config?: { [key: string]: string };
}

export interface ConfigSetRequest {
    key?: string;
    value?: string;
}

export interface ConfigSetResponse {
}

export interface AppStatusRequest {
}

export interface AppStatusResponse {
    promptKeygen?: boolean;
    promptUser?: boolean;
}

export interface Inbox {
    kid?: string;
    name?: string;
    createdAt?: number;
    messageCount?: number;
    snippet?: string;
    error?: string;
}

export interface InboxRequest {
}

export interface InboxResponse {
    inboxes?: Array<Inbox>;
}

export interface Message {
    id?: string;
    sender?: string;
    content?: MessageContent;
    user?: User;
    createdAt?: number;
    timeDisplay?: string;
    dateDisplay?: string;
    path?: string;
}

export interface MessageContent {
    text?: string;
}

export interface MessagePrepareRequest {
    kid?: string;
    sender?: string;
    text?: string;
}

export interface MessagePrepareResponse {
    message?: Message;
}

export interface MessageCreateRequest {
    kid?: string;
    sender?: string;
    // ID is usually from MessagePrepareResponse.ID, or auto generated if empty
    id?: string;
    text?: string;
}

export interface MessageCreateResponse {
    message?: Message;
}

export interface MessagesRequest {
    kid?: string;
}

export interface MessagesResponse {
    messages?: Array<Message>;
}

export interface KeysService {
    KeyGenerate: (r:KeyGenerateRequest) => KeyGenerateResponse;
    Keys: (r:KeysRequest) => KeysResponse;
    Key: (r:KeyRequest) => KeyResponse;
    KeyImport: (r:KeyImportRequest) => KeyImportResponse;
    KeyExport: (r:KeyExportRequest) => KeyExportResponse;
    KeyRemove: (r:KeyRemoveRequest) => KeyRemoveResponse;
    Sign: (r:SignRequest) => SignResponse;
    Verify: (r:VerifyRequest) => VerifyResponse;
    SignStream: (r:() => {value: SignStreamInput, done: boolean}, cb:(a:{value: SignStreamOutput, done: boolean}) => void) => void;
    VerifyStream: (r:() => {value: VerifyStreamInput, done: boolean}, cb:(a:{value: VerifyStreamOutput, done: boolean}) => void) => void;
    VerifyArmoredStream: (r:() => {value: VerifyStreamInput, done: boolean}, cb:(a:{value: VerifyStreamOutput, done: boolean}) => void) => void;
    Encrypt: (r:EncryptRequest) => EncryptResponse;
    Decrypt: (r:DecryptRequest) => DecryptResponse;
    EncryptStream: (r:() => {value: EncryptStreamInput, done: boolean}, cb:(a:{value: EncryptStreamOutput, done: boolean}) => void) => void;
    DecryptStream: (r:() => {value: DecryptStreamInput, done: boolean}, cb:(a:{value: DecryptStreamOutput, done: boolean}) => void) => void;
    DecryptArmoredStream: (r:() => {value: DecryptStreamInput, done: boolean}, cb:(a:{value: DecryptStreamOutput, done: boolean}) => void) => void;
    SigncryptOpenStream: (r:() => {value: DecryptStreamInput, done: boolean}, cb:(a:{value: DecryptStreamOutput, done: boolean}) => void) => void;
    SigncryptOpenArmoredStream: (r:() => {value: DecryptStreamInput, done: boolean}, cb:(a:{value: DecryptStreamOutput, done: boolean}) => void) => void;
    Sigchain: (r:SigchainRequest) => SigchainResponse;
    Statement: (r:StatementRequest) => StatementResponse;
    StatementCreate: (r:StatementCreateRequest) => StatementCreateResponse;
    StatementRevoke: (r:StatementRevokeRequest) => StatementRevokeResponse;
    UserSearch: (r:UserSearchRequest) => UserSearchResponse;
    UserService: (r:UserServiceRequest) => UserServiceResponse;
    UserSign: (r:UserSignRequest) => UserSignResponse;
    UserAdd: (r:UserAddRequest) => UserAddResponse;
    Item: (r:ItemRequest) => ItemResponse;
    Items: (r:ItemsRequest) => ItemsResponse;
    Pull: (r:PullRequest) => PullResponse;
    Push: (r:PushRequest) => PushResponse;
    Config: (r:ConfigRequest) => ConfigResponse;
    ConfigSet: (r:ConfigSetRequest) => ConfigSetResponse;
    AppStatus: (r:AppStatusRequest) => AppStatusResponse;
    AuthSetup: (r:AuthSetupRequest) => AuthSetupResponse;
    AuthUnlock: (r:AuthUnlockRequest) => AuthUnlockResponse;
    AuthLock: (r:AuthLockRequest) => AuthLockResponse;
    RuntimeStatus: (r:RuntimeStatusRequest) => RuntimeStatusResponse;
    Rand: (r:RandRequest) => RandResponse;
    Collections: (r:CollectionsRequest) => CollectionsResponse;
    Documents: (r:DocumentsRequest) => DocumentsResponse;
    DocumentDelete: (r:DocumentDeleteRequest) => DocumentDeleteResponse;
    Inbox: (r:InboxRequest) => InboxResponse;
    MessagePrepare: (r:MessagePrepareRequest) => MessagePrepareResponse;
    MessageCreate: (r:MessageCreateRequest) => MessageCreateResponse;
    Messages: (r:MessagesRequest) => MessagesResponse;
    Watch: (r:WatchRequest, cb:(a:{value: WatchEvent, done: boolean}) => void) => void;
}
