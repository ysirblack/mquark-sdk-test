export const registry_abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "entity",
        type: "address"
      }
    ],
    name: "EntityAddressNotRegistered",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256"
      }
    ],
    name: "EntityIdNotRegistered",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "controller",
        type: "address"
      }
    ],
    name: "ControllerSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entity",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityName",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "thumbnail",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityDefaultSlotURI",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "subscriptionPrice",
        type: "uint256"
      }
    ],
    name: "EntityRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ImplementationSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32"
      }
    ],
    name: "RoleAdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address"
      }
    ],
    name: "SubscriberSet",
    type: "event"
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONTROL_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SIGNATURE_VERIFIER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getController",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getControllerAndSubscriber",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      }
    ],
    name: "getEntityAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address"
      }
    ],
    name: "getEntityId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address"
      }
    ],
    name: "getEntityIsRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      }
    ],
    name: "getEntitySlotPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_implementation",
        type: "uint8"
      }
    ],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastEntityId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      }
    ],
    name: "getRegisteredEntity",
    outputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "description",
        type: "string"
      },
      {
        internalType: "string",
        name: "thumbnail",
        type: "string"
      },
      {
        internalType: "string",
        name: "entitySlotDefaultURI",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      }
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSubscriber",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "parameters",
    outputs: [
      {
        internalType: "contract ImQuarkRegistry",
        name: "registry",
        type: "address"
      },
      {
        internalType: "address",
        name: "subscriber",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_entityName",
        type: "string"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "string",
        name: "_thumbnail",
        type: "string"
      },
      {
        internalType: "string",
        name: "_entitySlotDefaultURI",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_slotPrice",
        type: "uint256"
      }
    ],
    name: "registerEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address"
      }
    ],
    name: "setControllerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_id",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address"
      }
    ],
    name: "setImplementationAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_subscriber",
        type: "address"
      }
    ],
    name: "setSubscriberAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
]

export const mquark_721_abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "CollectionIsSoldOut",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "InoperativeSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "InvalidPayment",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "variationId",
        type: "uint256"
      }
    ],
    name: "InvalidVariation",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "MintLimitReached",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "NoPaymentRequired",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "NotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "NotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      }
    ],
    name: "Unsubscribed",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      }
    ],
    name: "VerificationFailed",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "mintType",
        type: "uint8"
      }
    ],
    name: "WrongMintType",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "newCollectionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "previousCollectionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newEntityAddress",
        type: "address"
      }
    ],
    name: "CollectionTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "percentage",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "RoyaltyInfoUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "templateId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "collectionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string"
      }
    ],
    name: "TokenMint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royalty",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalWithdrawn",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "savedAmountOwner",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalWithdrawn",
        type: "uint256"
      }
    ],
    name: "WithdrawProtocol",
    type: "event"
  },
  {
    inputs: [],
    name: "ROYALTY_DIVISOR",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCollectionInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "collectionId",
        type: "uint64"
      },
      {
        internalType: "uint8",
        name: "mintType",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "mintPerAccountLimit",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "isFree",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "templateId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "mintCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "mintPrice",
        type: "uint256"
      },
      {
        internalType: "string[]",
        name: "collectionURIs",
        type: "string[]"
      },
      {
        internalType: "address",
        name: "verifier",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOwnerBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRoyaltyInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "royalty",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "withdrawnAmountByOwner",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "withdrawnAmountByProtocol",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "savedAmountOwner",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalWithdrawn",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "entityId",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "collectionId",
            type: "uint64"
          },
          {
            internalType: "uint8",
            name: "mintType",
            type: "uint8"
          },
          {
            internalType: "uint8",
            name: "mintPerAccountLimit",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "isWhitelisted",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isFree",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "templateId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "mintCount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "mintPrice",
            type: "uint256"
          },
          {
            internalType: "string[]",
            name: "collectionURIs",
            type: "string[]"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string"
          },
          {
            internalType: "address",
            name: "verifier",
            type: "address"
          }
        ],
        internalType: "struct Collection",
        name: "_collection",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_collectionOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_controller",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_mintRoyalty",
        type: "uint256"
      }
    ],
    name: "initilasiable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_variationId",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]"
      },
      {
        internalType: "uint256",
        name: "_variationId",
        type: "uint256"
      }
    ],
    name: "mintWhitelist",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "_salt",
        type: "bytes"
      }
    ],
    name: "mintWithURI",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]"
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "_salt",
        type: "bytes"
      }
    ],
    name: "mintWithURIWhitelist",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "protocolWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_entityDefaultUri",
        type: "string"
      }
    ],
    name: "resetSlotToDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256"
      }
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_ID",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_controller",
    outputs: [
      {
        internalType: "contract ImQuarkController",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_currentTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_freeMintCollection",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_ownerEntity",
    outputs: [
      {
        internalType: "contract ImQuarkEntity",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_royaltyPercentage",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_royaltyReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "royaltyPercentage",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "setRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "_entityIds",
        type: "uint256[]"
      },
      {
        internalType: "string[]",
        name: "_entityDefaultUris",
        type: "string[]"
      }
    ],
    name: "subscribeToEntities",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_entityDefaultUri",
        type: "string"
      }
    ],
    name: "subscribeToEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      }
    ],
    name: "tokenEntityURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferCollectionOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_transferredUri",
        type: "string"
      }
    ],
    name: "transferTokenEntityURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_entityId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_updatedUri",
        type: "string"
      }
    ],
    name: "updateURISlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
]