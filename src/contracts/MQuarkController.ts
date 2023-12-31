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
} from "../common";

export interface MQuarkControllerInterface extends utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "CONTROL_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "getEntityBalance(uint256)": FunctionFragment;
    "getImplementation(uint8)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoyalty()": FunctionFragment;
    "getRoyaltyAndMintPrice(uint256)": FunctionFragment;
    "getSubscriberContract()": FunctionFragment;
    "getTemplateMintPrice(uint256)": FunctionFragment;
    "getWithdrawalAddress()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "s_registeryContract()": FunctionFragment;
    "s_template()": FunctionFragment;
    "setAuthorizedWithdrawal(address)": FunctionFragment;
    "setRegistryContract(address)": FunctionFragment;
    "setRoyalty(uint256)": FunctionFragment;
    "setSubscriberContract(address)": FunctionFragment;
    "setTemplateContractAddress(address)": FunctionFragment;
    "setTemplatePrices(uint256[],uint256[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "validateAuthorization(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADMIN_ROLE"
      | "CONTROL_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "getEntityBalance"
      | "getImplementation"
      | "getRoleAdmin"
      | "getRoyalty"
      | "getRoyaltyAndMintPrice"
      | "getSubscriberContract"
      | "getTemplateMintPrice"
      | "getWithdrawalAddress"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "s_registeryContract"
      | "s_template"
      | "setAuthorizedWithdrawal"
      | "setRegistryContract"
      | "setRoyalty"
      | "setSubscriberContract"
      | "setTemplateContractAddress"
      | "setTemplatePrices"
      | "supportsInterface"
      | "validateAuthorization"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CONTROL_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntityBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "s_registeryContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_template",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedWithdrawal",
    values: [PromiseOrValue<string>]
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
    functionFragment: "setSubscriberContract",
    values: [PromiseOrValue<string>]
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
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAuthorization",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CONTROL_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntityBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
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
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "s_registeryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "s_template", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSubscriberContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplatePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateAuthorization",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedWithdrawalSet(address)": EventFragment;
    "RegistryContractAddressSet(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "RoyaltySet(uint256)": EventFragment;
    "SubscriberContractAddressSet(address)": EventFragment;
    "TemplateContractAddressSet(address)": EventFragment;
    "TemplatePricesSet(uint256[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedWithdrawalSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegistryContractAddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
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

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

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

export interface MQuarkController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MQuarkControllerInterface;

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
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    CONTROL_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    getEntityBalance(
      _entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getImplementation(
      _implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoyalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSubscriberContract(overrides?: CallOverrides): Promise<[string]>;

    getTemplateMintPrice(
      _templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    s_registeryContract(overrides?: CallOverrides): Promise<[string]>;

    s_template(overrides?: CallOverrides): Promise<[string]>;

    setAuthorizedWithdrawal(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRegistryContract(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRoyalty(
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSubscriberContract(
      _subscriber: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTemplateContractAddress(
      _template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTemplatePrices(
      _templateIds: PromiseOrValue<BigNumberish>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  CONTROL_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  getEntityBalance(
    _entityId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getImplementation(
    _implementation: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

  getRoyaltyAndMintPrice(
    templateId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getSubscriberContract(overrides?: CallOverrides): Promise<string>;

  getTemplateMintPrice(
    _templateId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWithdrawalAddress(overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  s_registeryContract(overrides?: CallOverrides): Promise<string>;

  s_template(overrides?: CallOverrides): Promise<string>;

  setAuthorizedWithdrawal(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRegistryContract(
    _registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRoyalty(
    _royalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSubscriberContract(
    _subscriber: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTemplateContractAddress(
    _template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTemplatePrices(
    _templateIds: PromiseOrValue<BigNumberish>[],
    _prices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateAuthorization(
    caller: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    CONTROL_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    getEntityBalance(
      _entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      _implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSubscriberContract(overrides?: CallOverrides): Promise<string>;

    getTemplateMintPrice(
      _templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    s_registeryContract(overrides?: CallOverrides): Promise<string>;

    s_template(overrides?: CallOverrides): Promise<string>;

    setAuthorizedWithdrawal(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistryContract(
      _registry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyalty(
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubscriberContract(
      _subscriber: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateContractAddress(
      _template: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplatePrices(
      _templateIds: PromiseOrValue<BigNumberish>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

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
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    CONTROL_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityBalance(
      _entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      _implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyAndMintPrice(
      templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriberContract(overrides?: CallOverrides): Promise<BigNumber>;

    getTemplateMintPrice(
      _templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawalAddress(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    s_registeryContract(overrides?: CallOverrides): Promise<BigNumber>;

    s_template(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthorizedWithdrawal(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRegistryContract(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRoyalty(
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSubscriberContract(
      _subscriber: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTemplateContractAddress(
      _template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTemplatePrices(
      _templateIds: PromiseOrValue<BigNumberish>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CONTROL_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntityBalance(
      _entityId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImplementation(
      _implementation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
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
      _templateId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawalAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    s_registeryContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    s_template(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthorizedWithdrawal(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRegistryContract(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSubscriberContract(
      _subscriber: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateContractAddress(
      _template: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTemplatePrices(
      _templateIds: PromiseOrValue<BigNumberish>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateAuthorization(
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
