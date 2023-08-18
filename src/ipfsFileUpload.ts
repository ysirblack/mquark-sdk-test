import { Collection, Entity, Signature, Subscription, Registry, IPFS, MerkleTree, ApiService } from "mquark-sdk";
import { ethers } from "ethers";
import "dotenv/config";
import { registry_abi, mquark_721_abi } from "./abi";
import { MQuarkEntity, MQuarkRegistry, MQuarkNFT721 } from "./contracts";
import { SignerOrProvider } from "mquark-sdk/dist/helpers/providerHelpers";
import { gql, request } from "graphql-request";
import axios from "axios";
import { createHelia } from "helia";
import { json } from "@helia/json";
import { Entities } from "mquark-sdk/dist/types";
import fs from "fs/promises";
import path from "path";

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

const token = process.env.WEB3_TOKEN || "";
const basePath = path.join(__dirname, "assets"); // Path to the directory containing images
const baseTemplatePath = path.join(__dirname, "templates"); // Path to the directory containing templates

const main = async () => {
  ///HERE THE SET
  //===================SET THE CONTRACT ADDRESS BELOW===============================
  //===================SET THE CONTRACT ADDRESS BELOW===============================
  //===================SET THE CONTRACT ADDRESS BELOW===============================
  //===================SET THE CONTRACT ADDRESS BELOW===============================
  //===================SET THE CONTRACT ADDRESS BELOW===============================
  let mQuarkTemplateAddress = "0xa74080238b85f87e4a714fb949d877cf9565df5c";
  let mQuarkControllerAddress = "0xe7280f829f9147ccc6fa74c5a9267daa48363b22";
  //===================SET THE CONTRACT ADDRESS ABOVE===============================
  //===================SET THE CONTRACT ADDRESS ABOVE===============================
  //===================SET THE CONTRACT ADDRESS ABOVE===============================
  //===================SET THE CONTRACT ADDRESS ABOVE===============================
  //===================SET THE CONTRACT ADDRESS ABOVE===============================
  //===================SET THE CONTRACT ADDRESS ABOVE===============================

  // let TemplateContract = (await ethers.getContractAt(mQuarkTemplate.abi, mQuarkTemplateAddress, owner)) as MQuarkTemplate;
  // let ControllerContract = (await ethers.getContractAt(mQuarkController.abi, mQuarkControllerAddress, owner)) as MQuarkController;

  // const token = process.env.WEB3_TOKEN || "";
  // const path = __dirname + "/assets/1.png"
  // const pathToJson = "./src/test.json"
  // const pathToFolder = "./src/files"

  // const ipfsService = IPFS.init(token);
  // const ipfs =  await ipfsService.storeFilesWithPath(path,false);
  // console.log("ipfs=>", ipfs)

  // const read = await ipfsService.read(ipfs);
  // console.log("read=>", read)

  // await uploadAndWriteURIs();
  await uploadAndWriteTemplates();
};

async function uploadAndWriteURIs() {
  const ipfsService = IPFS.init(token);
  // Loop through image files from 1.png to 47.png
  for (let i = 1; i <= 48; i++) {
    const imageName = `${i}.jpg`;
    const imagePath = path.join(basePath, imageName);

    try {
      const cid = await ipfsService.storeFilesWithPath(imagePath, false);
      console.log(`Uploaded ${imageName} => ipfs://${cid}`);

      // Write the URI to a text file
      const uri = `ipfs://${cid}`;
      await fs.appendFile("image_uris.txt", `${imageName} => ${uri}\n`);
      console.log(`URI written to image_uris.txt`);
    } catch (error) {
      console.error(`Error uploading ${imageName}:`, error);
    }
  }
}

async function uploadAndWriteTemplates() {
  const ipfsService = IPFS.init(token);
  const templates = [
    "armourTemplate.json",
    "artTemplate.json",
    "carTemplate.json",
    "clothTemplate.json",
    "drinkTemplate.json",
    "houseTemplate.json",
    "petTemplate.json",
    "planeTemplate.json",
    "shieldTemplate.json",
    "shipTemplate.json",
    "swordTemplate.json",
  ];
  // Loop through image files from 1.png to 47.png
  for (let i = 0; i <= templates.length; i++) {
    const templatePath = path.join(baseTemplatePath, templates[i]);

    try {
      const cid = await ipfsService.storeFilesWithPath(templatePath, false);
      console.log(`Uploaded ${templatePath} => ipfs://${cid}`);

      // Write the URI to a text file
      const uri = `ipfs://${cid}`;
      await fs.appendFile("templates_cids.txt", `${templatePath} => ${uri}\n`);
      console.log(`URI written to templates_cids.txt`);
    } catch (error) {
      console.error(`Error uploading ${templatePath}:`, error);
    }
  }

  [
    "ipfs://bafkreighigmotjkp6dsb3xtysswppdwkc4edf3dnaggwi5ccphd4obt7xe",
    "ipfs://bafkreign7zxaf5aerufssxjobuf7jzhrtgrbnn5yseqabjc5qkufz5ie6e",
    "ipfs://bafkreiavwyubtgei7bg67l6ye6ica57akondytdtu7l3ukveiupcmlisie",
    "ipfs://bafkreihan6gvfdigx7ybomcaji327p2intcz32kcopa7dhv7krcep3nqju",
    "ipfs://bafkreib2fcjqdo2iudso2spk4a5542a34txicwewixzftyrwj7hjkmdnbi",
    "ipfs://bafkreibuido2mq27ic3o65nnsggwzvgcsokroaa44zh43najqekgi5rzii",
    "ipfs://bafkreie6ifvba2grkfdv3cbonfgmiuwlzjpmraavyeol5ruezkqb2mzn7a",
    "ipfs://bafkreih5djenba32rztbdpikjrd72r36xeyw72wkralb7vn2ekqtkgam44",
    "ipfs://bafkreib2yvuheuxxlxcgwpmv32zpr46otb3vdrguv4eo24sjlqv4hqpdmy",
    "ipfs://bafkreiarbjc7lmcrijpmjspqkfandkv7ztz4n2vqzad4apksodzwtnmccu",
    "ipfs://bafkreia4tmlrpjowds6j55ewrdbdfgd3nu5mfkrnzwdlemu2k7kozcdxkm",
  ];
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });
