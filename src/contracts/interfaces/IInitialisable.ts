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
import type { FunctionFragment, Result } from "@ethersproject/abi";
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

export interface IInitialisableInterface extends utils.Interface {
  functions: {
    "initilasiable((uint256,uint64,uint8,uint8,bool,bool,uint256,uint256,uint256,uint256,string[],string,string,address),address,address,bytes32,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "initilasiable"): FunctionFragment;

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

  decodeFunctionResult(
    functionFragment: "initilasiable",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IInitialisable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInitialisableInterface;

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
    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  initilasiable(
    _collection: CollectionStruct,
    _collectionOwner: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    _merkleRoot: PromiseOrValue<BytesLike>,
    _mintRoyalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initilasiable(
      _collection: CollectionStruct,
      _collectionOwner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      _mintRoyalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}