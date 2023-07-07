/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type CollectionStruct = {
  entityId: PromiseOrValue<BigNumberish>;
  collectionId: PromiseOrValue<BigNumberish>;
  mintType: PromiseOrValue<BigNumberish>;
  mintPerAccountLimit: PromiseOrValue<BigNumberish>;
  isWhitelisted: PromiseOrValue<boolean>;
  isFree: PromiseOrValue<boolean>;
  templateId: PromiseOrValue<BigNumberish>;
  mintCount: PromiseOrValue<BigNumberish>;
  totalSupply: PromiseOrValue<BigNumberish>;
  mintPrice: PromiseOrValue<BigNumberish>;
  collectionURIs: PromiseOrValue<string>[];
  name: PromiseOrValue<string>;
  symbol: PromiseOrValue<string>;
  verifier: PromiseOrValue<string>;
};

export type CollectionStructOutput = [
  BigNumber,
  BigNumber,
  number,
  number,
  boolean,
  boolean,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string[],
  string,
  string,
  string
] & {
  entityId: BigNumber;
  collectionId: BigNumber;
  mintType: number;
  mintPerAccountLimit: number;
  isWhitelisted: boolean;
  isFree: boolean;
  templateId: BigNumber;
  mintCount: BigNumber;
  totalSupply: BigNumber;
  mintPrice: BigNumber;
  collectionURIs: string[];
  name: string;
  symbol: string;
  verifier: string;
};

export interface ImQuarkNFTInterface extends utils.Interface {
  functions: {
    "getCollectionInfo()": FunctionFragment;
    "initilasiable((uint256,uint64,uint8,uint8,bool,bool,uint256,uint256,uint256,uint256,string[],string,string,address),address,address,bytes32,uint256)": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "mintWhitelist(bytes32[],uint256)": FunctionFragment;
    "mintWithURI(address,bytes,string,bytes)": FunctionFragment;
    "mintWithURIWhitelist(bytes32[],address,bytes,string,bytes)": FunctionFragment;
    "protocolWithdraw()": FunctionFragment;
    "resetSlotToDefault(address,uint256,uint256,string)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "subscribeToEntity(address,uint256,uint256,string)": FunctionFragment;
    "subscribeToEntitys(address,uint256,uint64[],string[])": FunctionFragment;
    "tokenEntityURI(uint256,uint256)": FunctionFragment;
    "transferTokenEntityURI(address,uint256,uint256,string)": FunctionFragment;
    "updateURISlot(address,uint256,uint256,string)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCollectionInfo"
      | "initilasiable"
      | "mint"
      | "mintWhitelist"
      | "mintWithURI"
      | "mintWithURIWhitelist"
      | "protocolWithdraw"
      | "resetSlotToDefault"
      | "safeTransferFrom"
      | "subscribeToEntity"
      | "subscribeToEntitys"
      | "tokenEntityURI"
      | "transferTokenEntityURI"
      | "updateURISlot"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCollectionInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initilasiable",
    values: [
      CollectionStruct,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWhitelist",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWithURI",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWithURIWhitelist",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resetSlotToDefault",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "subscribeToEntity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "subscribeToEntitys",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenEntityURI",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTokenEntityURI",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateURISlot",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getCollectionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initilasiable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintWithURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintWithURIWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetSlotToDefault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscribeToEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscribeToEntitys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenEntityURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTokenEntityURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateURISlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "RoyaltyInfoUpdated(uint16,address)": EventFragment;
    "TokenMint(uint256,address,uint256,uint256,uint64,uint256,string)": EventFragment;
    "Withdraw(address,uint256,uint256,uint256)": EventFragment;
    "WithdrawProtocol(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoyaltyInfoUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawProtocol"): EventFragment;
}

export interface RoyaltyInfoUpdatedEventObject {
  percentage: number;
  receiver: string;
}
export type RoyaltyInfoUpdatedEvent = TypedEvent<
  [number, string],
  RoyaltyInfoUpdatedEventObject
>;

export type RoyaltyInfoUpdatedEventFilter =
  TypedEventFilter<RoyaltyInfoUpdatedEvent>;

export interface TokenMintEventObject {
  tokenId: BigNumber;
  to: string;
  entityId: BigNumber;
  templateId: BigNumber;
  collectionId: BigNumber;
  amount: BigNumber;
  uri: string;
}
export type TokenMintEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, string],
  TokenMintEventObject
>;

export type TokenMintEventFilter = TypedEventFilter<TokenMintEvent>;

export interface WithdrawEventObject {
  to: string;
  amount: BigNumber;
  royalty: BigNumber;
  totalWithdrawn: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface WithdrawProtocolEventObject {
  to: string;
  amount: BigNumber;
  savedAmountOwner: BigNumber;
  totalWithdrawn: BigNumber;
}
export type WithdrawProtocolEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  WithdrawProtocolEventObject
>;

export type WithdrawProtocolEventFilter =
  TypedEventFilter<WithdrawProtocolEvent>;

export interface ImQuarkNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ImQuarkNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCollectionInfo(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        number,
        number,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        string
      ] & {
        entityId: BigNumber;
        collectionId: BigNumber;
        mintType: number;
        mintPerAccountLimit: number;
        isWhitelisted: boolean;
        isFree: boolean;
        templateId: BigNumber;
        mintCount: BigNumber;
        totalSupply: BigNumber;
        mintPrice: BigNumber;
        collectionURIs: string[];
        verifier: string;
      }
    >;

    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintWhitelist(
      _merkleProof: PromiseOrValue<BytesLike>[],
      _variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintWithURI(
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintWithURIWhitelist(
      merkleProof: PromiseOrValue<BytesLike>[],
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    protocolWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resetSlotToDefault(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _defaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscribeToEntity(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      entitySlotDefaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscribeToEntitys(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityIds: PromiseOrValue<BigNumberish>[],
      entitySlotDefaultUris: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenEntityURI(
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferTokenEntityURI(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _soldUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateURISlot(
      owner: PromiseOrValue<string>,
      entityId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      updatedUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getCollectionInfo(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      number,
      number,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string[],
      string
    ] & {
      entityId: BigNumber;
      collectionId: BigNumber;
      mintType: number;
      mintPerAccountLimit: number;
      isWhitelisted: boolean;
      isFree: boolean;
      templateId: BigNumber;
      mintCount: BigNumber;
      totalSupply: BigNumber;
      mintPrice: BigNumber;
      collectionURIs: string[];
      verifier: string;
    }
  >;

  initilasiable(
    _collection: CollectionStruct,
    _collectionOwner: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    _merkleRoot: PromiseOrValue<BytesLike>,
    _mintRoyalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    variationId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintWhitelist(
    _merkleProof: PromiseOrValue<BytesLike>[],
    _variationId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintWithURI(
    signer: PromiseOrValue<string>,
    signature: PromiseOrValue<BytesLike>,
    uri: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintWithURIWhitelist(
    merkleProof: PromiseOrValue<BytesLike>[],
    signer: PromiseOrValue<string>,
    signature: PromiseOrValue<BytesLike>,
    uri: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  protocolWithdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resetSlotToDefault(
    _owner: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    entityId: PromiseOrValue<BigNumberish>,
    _defaultUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscribeToEntity(
    owner: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    entityId: PromiseOrValue<BigNumberish>,
    entitySlotDefaultUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscribeToEntitys(
    owner: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    entityIds: PromiseOrValue<BigNumberish>[],
    entitySlotDefaultUris: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenEntityURI(
    tokenId: PromiseOrValue<BigNumberish>,
    entityId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferTokenEntityURI(
    _owner: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    entityId: PromiseOrValue<BigNumberish>,
    _soldUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateURISlot(
    owner: PromiseOrValue<string>,
    entityId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    updatedUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCollectionInfo(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        number,
        number,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        string
      ] & {
        entityId: BigNumber;
        collectionId: BigNumber;
        mintType: number;
        mintPerAccountLimit: number;
        isWhitelisted: boolean;
        isFree: boolean;
        templateId: BigNumber;
        mintCount: BigNumber;
        totalSupply: BigNumber;
        mintPrice: BigNumber;
        collectionURIs: string[];
        verifier: string;
      }
    >;

    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      variationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintWhitelist(
      _merkleProof: PromiseOrValue<BytesLike>[],
      _variationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintWithURI(
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintWithURIWhitelist(
      merkleProof: PromiseOrValue<BytesLike>[],
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    protocolWithdraw(overrides?: CallOverrides): Promise<void>;

    resetSlotToDefault(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _defaultUri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    subscribeToEntity(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      entitySlotDefaultUri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    subscribeToEntitys(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityIds: PromiseOrValue<BigNumberish>[],
      entitySlotDefaultUris: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    tokenEntityURI(
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferTokenEntityURI(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _soldUri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateURISlot(
      owner: PromiseOrValue<string>,
      entityId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      updatedUri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "RoyaltyInfoUpdated(uint16,address)"(
      percentage?: null,
      receiver?: null
    ): RoyaltyInfoUpdatedEventFilter;
    RoyaltyInfoUpdated(
      percentage?: null,
      receiver?: null
    ): RoyaltyInfoUpdatedEventFilter;

    "TokenMint(uint256,address,uint256,uint256,uint64,uint256,string)"(
      tokenId?: null,
      to?: null,
      entityId?: null,
      templateId?: null,
      collectionId?: null,
      amount?: null,
      uri?: null
    ): TokenMintEventFilter;
    TokenMint(
      tokenId?: null,
      to?: null,
      entityId?: null,
      templateId?: null,
      collectionId?: null,
      amount?: null,
      uri?: null
    ): TokenMintEventFilter;

    "Withdraw(address,uint256,uint256,uint256)"(
      to?: null,
      amount?: null,
      royalty?: null,
      totalWithdrawn?: null
    ): WithdrawEventFilter;
    Withdraw(
      to?: null,
      amount?: null,
      royalty?: null,
      totalWithdrawn?: null
    ): WithdrawEventFilter;

    "WithdrawProtocol(address,uint256,uint256,uint256)"(
      to?: null,
      amount?: null,
      savedAmountOwner?: null,
      totalWithdrawn?: null
    ): WithdrawProtocolEventFilter;
    WithdrawProtocol(
      to?: null,
      amount?: null,
      savedAmountOwner?: null,
      totalWithdrawn?: null
    ): WithdrawProtocolEventFilter;
  };

  estimateGas: {
    getCollectionInfo(overrides?: CallOverrides): Promise<BigNumber>;

    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintWhitelist(
      _merkleProof: PromiseOrValue<BytesLike>[],
      _variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintWithURI(
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintWithURIWhitelist(
      merkleProof: PromiseOrValue<BytesLike>[],
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    protocolWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resetSlotToDefault(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _defaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscribeToEntity(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      entitySlotDefaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscribeToEntitys(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityIds: PromiseOrValue<BigNumberish>[],
      entitySlotDefaultUris: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenEntityURI(
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferTokenEntityURI(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _soldUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateURISlot(
      owner: PromiseOrValue<string>,
      entityId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      updatedUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCollectionInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintWhitelist(
      _merkleProof: PromiseOrValue<BytesLike>[],
      _variationId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintWithURI(
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintWithURIWhitelist(
      merkleProof: PromiseOrValue<BytesLike>[],
      signer: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      uri: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    protocolWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resetSlotToDefault(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _defaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscribeToEntity(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      entitySlotDefaultUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscribeToEntitys(
      owner: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      entityIds: PromiseOrValue<BigNumberish>[],
      entitySlotDefaultUris: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenEntityURI(
      tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferTokenEntityURI(
      _owner: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      entityId: PromiseOrValue<BigNumberish>,
      _soldUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateURISlot(
      owner: PromiseOrValue<string>,
      entityId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      updatedUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
