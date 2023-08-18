import { Collection, Entity, Signature, Subscription, Registry, IPFS, MerkleTree, ApiService } from "mquark-sdk";
import { ethers } from "ethers";
import "dotenv/config";
import { registry_abi, mquark_721_abi } from "./abi";
import { MQuarkEntity, MQuarkRegistry, MQuarkNFT721 } from "./contracts";
import { SignerOrProvider } from "mquark-sdk/dist/helpers/providerHelpers";
import { gql, request } from 'graphql-request';
import axios from "axios";
import { createHelia } from 'helia'
import { json } from '@helia/json'
import { Entities } from "mquark-sdk/dist/types";

async function main() {
  type Config = {
    is_testnet?: boolean | undefined;
    api_key?: string | undefined;
    base_url?: string | undefined;
    end_point?: string | undefined;
    entity_wallet_address?: string | undefined;
  };
  interface MintConfig extends Config {
    signerOrProvider: SignerOrProvider;
    [key: string]: any;
  }
  type RegistryOptions = {
    entityName: string;
    description: string;
    thumbnail: string;
    entitySlotDefaultURI: string;
    slotPrice: string;
  };

  type CollectionParams = {
    templateId: string; // The ID of the template associated with the collection
    collectionURIs: string[]; // The URIs associated with the collection
    totalSupply: string; // The total supply of tokens in the collection
    mintPrice: string; // The price of minting a token in the collection
    mintPerAccountLimit: string; // The maximum number of tokens that can be minted per wallet
    name: string; // The name of the collection
    symbol: string; // The symbol of the collection
    verifier?: string; // The address of the verifier contract
    isWhitelisted: boolean; // A flag indicating if the collection is whitelisted
  };

  type MintOptions = {
    value: string;
    type: "free" | "paid";
    model: "static" | "dynamic" | "limited";
    isWhitelisted: boolean;
    variation: string;
    uri?: string;
    merkleProof?: string[];
    signer?: string;
    signature?: string;
    salt?: string;
  };
  const path = __dirname + "/test.json"
  const pathToJson = "./src/test.json"
  const pathToFolder = "./src/files"

  const key = (process.env.PRIVATE_KEY as ethers.utils.BytesLike) || "";
  const wallet = new ethers.Wallet(key, ethers.getDefaultProvider(process.env.DEFAULT_PROVIDER as string));
  const provider = ethers.getDefaultProvider(process.env.DEFAULT_PROVIDER as string);

  const mintConfig: MintConfig = {
    api_key: "",
    signerOrProvider: wallet,
    is_testnet: true,
  };

  //==================================Registry========================================================//
  const registtryService = Registry.init(mintConfig);

  const registryOptions: RegistryOptions = {
    entityName: "TEST",
    description: "TST",
    thumbnail: "ipfs://test",
    entitySlotDefaultURI: "ipfs://test",
    slotPrice: "10000000000",
  };

  // const deployedEntity = await registtryService.registerEntity(registryOptions);
  const deployedEntity = await registtryService.getEntityAddress("1");
  console.log("Registered Entity Address:", deployedEntity);
  //==================================================================================================//

  //==================================Entity========================================================//

  // const entityService = Entity.init(mintConfig, deployedEntity);
  // const collectionParams: CollectionParams = {
  //   templateId: "1",
  //   collectionURIs: ["ipfs://test"],
  //   totalSupply: "100",
  //   mintPrice: "10000000000",
  //   mintPerAccountLimit: "100",
  //   name: "Best Cat Collection",
  //   symbol: "BSC",
  //   // verifier: wallet.address,
  //   isWhitelisted: false,
  // };

  // const deployedCollection = await entityService.createCollection(collectionParams,true,"0");
  // console.log("Deployed Collection Address:", deployedCollection);

  //===================================================================================================//

  // ================== Minting ==================///
  
  // const collectionService =  Collection.init(mintConfig, deployedCollection);
  // const collectionService = Collection.init(mintConfig, "0x75c0b0F23A529Bd6CF1F890cEB61180B60fD84a7");

  // const mintOptions: MintOptions = {
  //   value: "0.00000001",
  //   type: "paid",
  //   model: "static",
  //   isWhitelisted: false,
  //   variation: "0",
  // };

  // const { tokenId, to, entityId, templateId, collectionId, amount, uri } = await collectionService.mint(mintOptions);
  // console.log("Minted Token Id:", tokenId);
  // console.log("Minted Token To:", to);
  // console.log("Minted Token Entity Id:", entityId);
  // console.log("Minted Token Template Id:", templateId);
  // console.log("Minted Token Collection Id:", collectionId);
  // console.log("Minted Token Amount:", amount);
  // console.log("Minted Token URI:", uri);
  // const config = {
  //   base_url: "https://api.thegraph.com/subgraphs/name/",
  //   end_point: "ysirblack/polygon-mquark",
  // }
  //===================================================================================================//

  // ================== API Service ==================///

  
  // const config = {
  //   base_url: "https://api.studio.thegraph.com/query/35629/mquark-testnet-v1/",
  //   end_point: "version/latest",
  // }

  // const apiService = new ApiService(config);

  // const res = await apiService.fetch_owned_entities("0xfe7bcb621fc9b10be7acecaf497f")
  // console.log("templates=>", res)
  // const entity = await apiService.fetch_entity("1");
  // console.log("entity=>",entity)
  // const collection = await apiService.fetch_entity_collections("1");
  // console.log("collection=>",collection)

  // const entityCollection = await apiService.fetch_entity_collection("0x0ab27d4a2d2f4af5159371002611899363977c14")
  // console.log("entityCollection=>", entityCollection)

  // const quark_owner = await apiService.fetch_quark_owner("0xfe7bc9d3dfd961226b621fc9b10be7acecaf497f")
  // console.log("quark_owner=>", quark_owner)

  // const token = await apiService.fetch_token("0x19a4976bd3eed8350329e7aeb3b1cce5c688fb07-0")
  // console.log("token=>", token)

  // ===================================================================================================//

  //==================================Signature========================================================//
  // const signatureGeerator = new Signature(wallet);
  // const signature = await signatureGeerator.signatureMessageWitSalt("0x2d323fBfdc22be7D8E3652CB4032C34eE2E3B667","1","1","1","ipfs:/uri","0x01");
  // console.log("signature=>", signature);
  //===================================================================================================//

  //=================================IPFS Service========================================================//
  // const token = process.env.WEB3_TOKEN || "";
  
  // const ipfsService = IPFS.init(token);
  // const ipfs =  await ipfsService.storeFiles(path,false);
  // console.log("ipfs=>", ipfs)

  // const read = await ipfsService.read(ipfs);
  // console.log("read=>", read)
  // ====================================================================================================//

  // ======================= Subscription =======================//
  // const subscription = Subscription.init(mintConfig);
  // await subscription.subscribeToEntity("4","0x753ef8763ebb89a479957fbd5c644db9b034cc09","1","10000000000000")
  // ====================================================================================================//

  //============================API MQUARK TESTNET V1============================//
  const endpoint = "https://api.studio.thegraph.com/query/35629/mquark-testnet-v1/version/latest";

  // async function apiTest(param:any) {
  //   const { mquarkEntities }: { mquarkEntities: any } = await request(
  //     endpoint,
  //     gql`
  //       query OwnedEntities($_owner: String) {
  //         mquarkEntities(owner: $_owner) {
  //           id
  //           entityId
  //           name
  //           description
  //           thumbnail
  //           contractAddress
  //           defaultURI
  //           owner
  //           subscriptionPrice
  //           subscriptionBalance
  //           verifier
  //         }
  //       }
  //     `,
  //     { _owner: param }
  //   );
  //   return mquarkEntities;
  // }
  // console.log("entities:", await apiTest("0xfe7bc9d3dfd961226b621fc9b10be7acecaf497f"));



  // async function fetch_entity_collections_with_metadata(id: string) {
  //   /// @dev Fetches an entity's created collections from the graph.
  //   const { mquarkEntity}: { mquarkEntity: any } = await request(
  //     endpoint,
  //     gql`
  //       query EntityCollections($_id: ID!) {
  //         mquarkEntity(id: $_id) {
  //           createdCollections {
  //             id
  //             entityId
  //             collectionId
  //             templateId
  //             address
  //             controller
  //             verifier
  //             template {
  //               id
  //               templateId
  //               uri
  //               category
  //             }
  //             balance
  //             royalty
  //             mintType
  //             mintPrice
  //             mintLimit
  //             totalSupply
  //             mintedCount
  //             dynamic
  //             free
  //             whitelisted
  //             collectionURIs
  //             protocolBalance
  //             protocolWithdrawnAmount
  //             witdrawnAmount
  //             totalWithdrawnAmount
  //           }
  //         }
  //       }
  //     `,
  //     { _id: id }
  //   );
  //   for(let i = 0; i < mquarkEntity.length; i++) {
  //     await axios.get(mquarkEntity[i].uri).then((res) => {
  //       mquarkEntity[i].metadata = res.data;
  //     })
  //   }
  //   return mquarkEntity;
  // }

  const entities = async function fetch_owned_entities(owner: string): Promise<Entities> {
    /// @dev Fetches an owner's entities from the graph.
    const { mquarkEntities }: { mquarkEntities: Entities } = await request(
      endpoint,
      gql`
        query OwnedEntities($_owner: String) {
          mquarkEntities(where: {owner: $_owner}) {
            id
            entityId
            name
            description
            thumbnail
            contractAddress
            defaultURI
            owner
            subscriptionPrice
            subscriptionBalance
            verifier
          }
        }
      `,
      { _owner: owner }
    );
    return mquarkEntities;
  }
  console.log("entities:", await entities("0xC52d3ECB7F84A27c68541933FDd5b74b96334c05"));

  // console.log("entity collections:", await fetch_entity_collections_with_metadata("1"));
  //===================================================================================================//
  // ======================= Free Test =======================//
  // const mquark_collection = new ethers.Contract("0x75c0b0F23A529Bd6CF1F890cEB61180B60fD84a7", mquark_721_abi, wallet) as MQuarkNFT721;
  // const tx = await mquark_collection.mint(0, { value: "10000000000" });
  // tx.wait()
  //   .then((receipt: any) => {
  //     // console.log(receipt.events[2].args.toString());
  //     const log = receipt.events[2].args.toString();
  //     const output = {
  //       tokenId: receipt.events[2].args.tokenId.toString(),
  //       to: receipt.events[2].args.to.toString(),
  //       entityId: receipt.events[2].args.entityId.toString(),
  //       templateId: receipt.events[2].args.templateId.toString(),
  //       collectionId: receipt.events[2].args.collectionId.toString(),
  //       amount: receipt.events[2].args.amount.toString(),
  //       uri: receipt.events[2].args.uri,
  //     };
  //     console.log(output);
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
  //   });
  // ===================================================================================================//



  // const helia = await createHelia()
  // const j = json(helia)

  // const myImmutableAddress = await j.add({ hello: 'world' })

  // console.log(await j.get(myImmutableAddress))
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });
