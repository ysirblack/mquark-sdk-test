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

export interface ImQuarkControllerInterface extends utils.Interface {
  functions: {
    "getEntityBalance(uint256)": FunctionFragment;
    "getImplementation(uint8)": FunctionFragment;
    "getRoyalty()": FunctionFragment;
    "getRoyaltyAndMintPrice(uint256)": FunctionFragment;
    "getSubscriberContract()": FunctionFragment;
    "getTemplateMintPrice(uint256)": FunctionFragment;
    "getWithdrawalAddress()": FunctionFragment;
    "setRegistryContract(address)": FunctionFragment;
    "setRoyalty(uint256)": FunctionFragment;
    "setTemplateContractAddress(address)": FunctionFragment;
    "setTemplatePrices(uint256[],uint256[])": FunctionFragment;
    "validateAuthorization(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEntityBalance"
      | "getImplementation"
      | "getRoyalty"
      | "getRoyaltyAndMintPrice"
      | "getSubscriberContract"
      | "getTemplateMintPrice"
      | "getWithdrawalAddress"
      | "setRegistryContract"
      | "setRoyalty"
      | "setTemplateContractAddress"
      | "setTemplatePrices"
      | "validateAuthorization"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEntityBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyalty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyAndMintPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriberContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTemplateMintPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawalAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRegistryContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateContractAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplatePrices",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAuthorization",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEntityBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyAndMintPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriberContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTemplateMintPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplatePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateAuthorization",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedWithdrawalSet(address)": EventFragment;
    "RegistryContractAddressSet(address)": EventFragment;
    "RoyaltySet(uint256)": EventFragment;
    "SubscriberContractAddressSet(address)": EventFragment;
    "TemplateContractAddressSet(address)": EventFragment;
    "TemplatePricesSet(uint256[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedWithdrawalSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegistryContractAddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltySet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SubscriberContractAddressSet"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateContractAddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplatePricesSet"): EventFragment;
}

export interface AuthorizedWithdrawalSetEventObject {
  authorizedWithdrawal: string;
}
export type AuthorizedWithdrawalSetEvent = TypedEvent<
  [string],
  AuthorizedWithdrawalSetEventObject
>;

export type AuthorizedWithdrawalSetEventFilter =
  TypedEventFilter<AuthorizedWithdrawalSetEvent>;

export interface RegistryContractAddressSetEventObject {
  registry: string;
}
export type RegistryContractAddressSetEvent = TypedEvent<
  [string],
  RegistryContractAddressSetEventObject
>;

export type RegistryContractAddressSetEventFilter =
  TypedEventFilter<RegistryContractAddressSetEvent>;

export interface RoyaltySetEventObject {
  royalty: BigNumber;
}
export type RoyaltySetEvent = TypedEvent<[BigNumber], RoyaltySetEventObject>;

export type RoyaltySetEventFilter = TypedEventFilter<RoyaltySetEvent>;

export interface SubscriberContractAddressSetEventObject {
  subscriber: string;
}
export type SubscriberContractAddressSetEvent = TypedEvent<
  [string],
  SubscriberContractAddressSetEventObject
>;

export type SubscriberContractAddressSetEventFilter =
  TypedEventFilter<SubscriberContractAddressSetEvent>;

export interface TemplateContractAddressSetEventObject {
  template: string;
}
export type TemplateContractAddressSetEvent = TypedEvent<
  [string],
  TemplateContractAddressSetEventObject
>;

export type TemplateContractAddressSetEventFilter =
  TypedEventFilter<TemplateContractAddressSetEvent>;

export interface TemplatePricesSetEventObject {
  templateIds: BigNumber[];
  prices: BigNumber[];
}
export type TemplatePricesSetEvent = TypedEvent<
  [BigNumber[], BigNumber[]],
  TemplatePricesSetEventObject
>;

export type TemplatePricesSetEventFilter =
  TypedEventFilter<TemplatePricesSetEvent>;

export interface ImQuarkController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ImQuarkControllerInterface;

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
    getEntityBalance(
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getImplementation(
      implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoyalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSubscriberContract(overrides?: CallOverrides): Promise<[string]>;

    getTemplateMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<[string]>;

    setRegistryContract(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRoyalty(
      royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTemplateContractAddress(
      template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTemplatePrices(
      templateIds: PromiseOrValue<BigNumberish>[],
      prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getEntityBalance(
    entityId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getImplementation(
    implementation: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

  getRoyaltyAndMintPrice(
    templateId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getSubscriberContract(overrides?: CallOverrides): Promise<string>;

  getTemplateMintPrice(
    templateId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWithdrawalAddress(overrides?: CallOverrides): Promise<string>;

  setRegistryContract(
    registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRoyalty(
    royalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTemplateContractAddress(
    template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTemplatePrices(
    templateIds: PromiseOrValue<BigNumberish>[],
    prices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateAuthorization(
    caller: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getEntityBalance(
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSubscriberContract(overrides?: CallOverrides): Promise<string>;

    getTemplateMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<string>;

    setRegistryContract(
      registry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyalty(
      royalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateContractAddress(
      template: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplatePrices(
      templateIds: PromiseOrValue<BigNumberish>[],
      prices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AuthorizedWithdrawalSet(address)"(
      authorizedWithdrawal?: null
    ): AuthorizedWithdrawalSetEventFilter;
    AuthorizedWithdrawalSet(
      authorizedWithdrawal?: null
    ): AuthorizedWithdrawalSetEventFilter;

    "RegistryContractAddressSet(address)"(
      registry?: null
    ): RegistryContractAddressSetEventFilter;
    RegistryContractAddressSet(
      registry?: null
    ): RegistryContractAddressSetEventFilter;

    "RoyaltySet(uint256)"(royalty?: null): RoyaltySetEventFilter;
    RoyaltySet(royalty?: null): RoyaltySetEventFilter;

    "SubscriberContractAddressSet(address)"(
      subscriber?: null
    ): SubscriberContractAddressSetEventFilter;
    SubscriberContractAddressSet(
      subscriber?: null
    ): SubscriberContractAddressSetEventFilter;

    "TemplateContractAddressSet(address)"(
      template?: null
    ): TemplateContractAddressSetEventFilter;
    TemplateContractAddressSet(
      template?: null
    ): TemplateContractAddressSetEventFilter;

    "TemplatePricesSet(uint256[],uint256[])"(
      templateIds?: null,
      prices?: null
    ): TemplatePricesSetEventFilter;
    TemplatePricesSet(
      templateIds?: null,
      prices?: null
    ): TemplatePricesSetEventFilter;
  };

  estimateGas: {
    getEntityBalance(
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriberContract(overrides?: CallOverrides): Promise<BigNumber>;

    getTemplateMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<BigNumber>;

    setRegistryContract(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRoyalty(
      royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTemplateContractAddress(
      template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTemplatePrices(
      templateIds: PromiseOrValue<BigNumberish>[],
      prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEntityBalance(
      entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImplementation(
      implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubscriberContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTemplateMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawalAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRegistryContract(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateContractAddress(
      template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTemplatePrices(
      templateIds: PromiseOrValue<BigNumberish>[],
      prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
