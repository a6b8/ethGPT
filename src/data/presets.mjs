export const presets = {
    "presets": {
        "getChainActivityByWallet": {
            "GET": {
                "description": "Get chain activity by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-chain-activity-by-wallet",
                "route": "wallets/:address/chains",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "Wallet address",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chains": {
                            "default": {},
                            "description": "The chains to query.",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__chains",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNativeBalanceByWallet": {
            "GET": {
                "description": "Get native balance by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-native-balance",
                "route": ":address/balance",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address from which the native balance will be checked",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number from which the balances should be checked",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNativeBalancesForAddresses": {
            "GET": {
                "description": "Get native balance for multiple wallets",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-native-balances-for-addresses",
                "route": "wallets/balances",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number on which the balances should be checked",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "wallet_addresses": {
                            "default": {},
                            "description": "The addresses to get metadata for (max 25 addresses)",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__wallet_addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getNFTsByWallet": {
            "GET": {
                "description": "Get NFTs by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet",
                "route": ":address/nft",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "decimal",
                                    "hex"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "exclude_spam": {
                            "default": {},
                            "description": "Should spam NFTs be excluded from the result?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "token_addresses": {
                            "default": {},
                            "description": "The non-fungible token (NFT) addresses to get balances for",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__token_addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned? Learn more about media items here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTCollectionsByWallet": {
            "GET": {
                "description": "Get NFT collections by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet",
                "route": ":address/nft/collections",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The wallet address of the owner of NFTs in the collections",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "exclude_spam": {
                            "default": {},
                            "description": "Should spam NFTs be excluded from the result?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getTokenBalancesByWallet": {
            "GET": {
                "description": "Get ERC20 token balance by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-token-balances-by-wallet",
                "route": ":address/erc20",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address from which token balances will be checked",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number from which the balances should be checked",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "token_addresses": {
                            "default": {},
                            "description": "The addresses to get balances for (optional)",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__token_addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getDecodedTransactionsByWallet": {
            "GET": {
                "description": "Get decoded transactions by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-decoded-transactions-by-wallet",
                "route": ":address/verbose",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNativeTransactionsByWallet": {
            "GET": {
                "description": "Get native transactions by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-transactions-by-wallet",
                "route": ":address",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletNFTTransfers": {
            "GET": {
                "description": "Get transfers by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-nft-transfers",
                "route": ":address/nft/transfers",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The wallet address of the sender or recipient of the transfers",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "To get the reserves at this block number",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The date from where to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletTokenTransfers": {
            "GET": {
                "description": "Get ERC20 token transfers by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-token-transfers",
                "route": ":address/erc20/transfers",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "resolveAddress": {
            "GET": {
                "description": "ENS Lookup by Address",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/resolve-address",
                "route": "resolve/:address/reverse",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address to be resolved",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "resolveENSDomain": {
            "GET": {
                "description": "ENS Lookup By Domain",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/resolve-ens-domain",
                "route": "resolve/ens/:domain",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "domain": {
                            "default": {},
                            "description": "The domain to be resolved",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__domain",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "resolveAddressToDomain": {
            "GET": {
                "description": "Unstoppable Lookup by Address",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/resolve-address-to-domain",
                "route": "resolve/:address/domain",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address to be resolved",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "resolveDomain": {
            "GET": {
                "description": "Unstoppable Lookup By Domain",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/resolve-domain",
                "route": "resolve/:domain",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "domain": {
                            "default": {},
                            "description": "The domain to be resolved",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__domain",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "currency": {
                            "default": {},
                            "description": "The currency to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__currency",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletStats": {
            "GET": {
                "description": "Get wallet stats",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-wallet-stats",
                "route": "wallets/:address/stats",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "Wallet address",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletNFTs": {
            "GET": {
                "description": "Get NFTs by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-nfts",
                "route": ":address/nft",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "decimal",
                                    "hex"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "exclude_spam": {
                            "default": {},
                            "description": "Should spam NFTs be excluded from the result?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "token_addresses": {
                            "default": {},
                            "description": "The non-fungible token (NFT) addresses to get balances for",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__token_addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned? Learn more about media items here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getMultipleNFTs": {
            "POST": {
                "description": "Get multiple NFTs",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-multiple-nfts",
                "route": "nft/getMultipleNFTs",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getContractNFTs": {
            "GET": {
                "description": "Get NFTs by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-contract-nfts",
                "route": "nft/:address",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "totalRanges": {
                            "default": {},
                            "description": "The number of subranges to split the results into",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__totalRanges",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "range": {
                            "default": {},
                            "description": "The desired subrange to query",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__range",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "Should normalized metadata be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "reSyncMetadata": {
            "GET": {
                "description": "Resync metadata",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/resync-metadata",
                "route": "nft/:address/:token_id/metadata/resync",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token_id": {
                            "default": {},
                            "description": "The ID of the token",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token_id",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "flag": {
                            "default": {},
                            "description": "The type of resync to operate",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "uri",
                                    "metadata"
                                ]
                            },
                            "required": false
                        },
                        "mode": {
                            "default": {},
                            "description": "To define the behaviour of the endpoint",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "sync",
                                    "async"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTMetadata": {
            "GET": {
                "description": "Get NFT data",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-metadata",
                "route": "nft/:address/:token_id",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token_id": {
                            "default": {},
                            "description": "The ID of the token",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token_id",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "decimal",
                                    "hex"
                                ]
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned? Learn more about media items here.",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTContractTransfers": {
            "GET": {
                "description": "Get transfers by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-contract-transfers",
                "route": "nft/:address/transfers",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from where to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from where to get the transfers.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The date from where to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTransfersFromToBlock": {
            "GET": {
                "description": "Get transfers from block to block",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers-from-to-block",
                "route": "nft/transfers",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transfers.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "The end date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (for getting the next page)",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTransfersByBlock": {
            "GET": {
                "description": "Get transfers by block",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers-by-block",
                "route": "block/:block_number_or_hash/nft/transfers",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "block_number_or_hash": {
                            "default": {},
                            "description": "The block number or block hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__block_number_or_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTransfers": {
            "GET": {
                "description": "Get transfers by contract and token ID",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers",
                "route": "nft/:address/:token_id/transfers",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token_id": {
                            "default": {},
                            "description": "The ID of the token",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token_id",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletNFTCollections": {
            "GET": {
                "description": "Get collections by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-nft-collections",
                "route": ":address/nft/collections",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The wallet address of the owner of NFTs in the collections",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "exclude_spam": {
                            "default": {},
                            "description": "Should spam NFTs be excluded from the result?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTContractMetadata": {
            "GET": {
                "description": "Get contract metadata",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-contract-metadata",
                "route": "nft/:address/metadata",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "syncNFTContract": {
            "PUT": {
                "description": "Sync NFT contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/sync-nft-contract",
                "route": "nft/:address/sync",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTOwners": {
            "GET": {
                "description": "Get NFT owners",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-owners",
                "route": "nft/:address/owners",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "Should normalized metadata be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTokenIdOwners": {
            "GET": {
                "description": "Get token ID owners",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-token-id-owners",
                "route": "nft/:address/:token_id/owners",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token_id": {
                            "default": {},
                            "description": "The ID of the token",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token_id",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "format": {
                            "default": {},
                            "description": "The format of the token ID",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__format",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "normalizeMetadata": {
                            "default": {},
                            "description": "Should normalized metadata be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        },
                        "media_items": {
                            "default": {},
                            "description": "Should preview media data be returned?",
                            "type": "boolean",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "false",
                                    "true"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTrades": {
            "GET": {
                "description": "Get NFT trades",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-trades",
                "route": "nft/:address/trades",
                "spamDetection": true,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number to get the trades from",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "The end date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "marketplace": {
                            "default": {},
                            "description": "Marketplace from which to get the trades (only OpenSea is supported at the moment)",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__marketplace",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTLowestPrice": {
            "GET": {
                "description": "Get lowest price",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-lowest-price",
                "route": "nft/:address/lowestprice",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "days": {
                            "default": {},
                            "description": "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__days",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "marketplace": {
                            "default": {},
                            "description": "Marketplace from which to get the trades (only OpenSea is supported at the moment)",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__marketplace",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTCollectionStats": {
            "GET": {
                "description": "Get collection stats",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-collection-stats",
                "route": "nft/:address/stats",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT collection",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getNFTTokenStats": {
            "GET": {
                "description": "Get token stats",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-nft-token-stats",
                "route": "nft/:address/:token_id/stats",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the NFT collection",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token_id": {
                            "default": {},
                            "description": "The token id of the NFT collection",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token_id",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletTokenBalances": {
            "GET": {
                "description": "Get ERC20 token balance by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-token-balances",
                "route": ":address/erc20",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address from which token balances will be checked",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number from which the balances should be checked",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "token_addresses": {
                            "default": {},
                            "description": "The addresses to get balances for (optional)",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__token_addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getTokenMetadataBySymbol": {
            "GET": {
                "description": "Get ERC20 token metadata by symbols",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-metadata-by-symbol",
                "route": "erc20/metadata/symbols",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "symbols": {
                            "default": {},
                            "description": "The symbols to get metadata for",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__symbols",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getTokenMetadata": {
            "GET": {
                "description": "Get ERC20 token metadata by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-metadata",
                "route": "erc20/metadata",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "addresses": {
                            "default": {},
                            "description": "The addresses to get metadata for",
                            "type": "array",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__addresses",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getTokenPrice": {
            "GET": {
                "description": "Get ERC20 token price",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-price",
                "route": "erc20/:address/price",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the token contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the 24hr percent change",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "percent_change"
                                ]
                            },
                            "required": false
                        },
                        "exchange": {
                            "default": {},
                            "description": "The factory name or address of the token exchange. View supported exchanges here",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "uniswapv2",
                                    "uniswapv3",
                                    "sushiswapv2",
                                    "pancakeswapv1",
                                    "pancakeswapv2",
                                    "pancakeswapv3",
                                    "quickswap",
                                    "quickswapv2",
                                    "traderjoe",
                                    "pangolin",
                                    "spookyswap",
                                    "vvs",
                                    "mm finance",
                                    "crodex",
                                    "camelotv2"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number from which the token price should be checked",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getMultipleTokenPrices": {
            "POST": {
                "description": "Get multiple token prices",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-multiple-token-prices",
                "route": "erc20/prices",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the 24hr percent change",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "percent_change"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getTokenAllowance": {
            "GET": {
                "description": "Get ERC20 token allowance",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-allowance",
                "route": "erc20/:address/allowance",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the token contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "owner_address": {
                            "default": {},
                            "description": "The address of the token owner",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__owner_address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "spender_address": {
                            "default": {},
                            "description": "The address of the token spender",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__spender_address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getTokenTransfers": {
            "GET": {
                "description": "Get ERC20 token transfers by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-transfers",
                "route": "erc20/:address/transfers",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the token contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transfers.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getPairReserves": {
            "GET": {
                "description": "Get DEX token pair reserves",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-pair-reserves",
                "route": ":pair_address/reserves",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "pair_address": {
                            "default": {},
                            "description": "The liquidity pair address",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__pair_address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number to get the reserves from",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the reserves up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getPairAddress": {
            "GET": {
                "description": "Get DEX token pair address",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-pair-address",
                "route": ":token0_address/:token1_address/pairAddres",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "token0_address": {
                            "default": {},
                            "description": "The token0 address",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token0_address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "token1_address": {
                            "default": {},
                            "description": "The token1 address",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__token1_address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The block number to get the reserves from",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the reserves up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "exchange": {
                            "default": {},
                            "description": "The factory name or address of the token exchange",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "uniswapv2",
                                    "uniswapv3",
                                    "sushiswapv2",
                                    "pancakeswapv1",
                                    "pancakeswapv2",
                                    "quickswap",
                                    "quickswapv2",
                                    "traderjoe",
                                    "pangolin",
                                    "spookyswap",
                                    "vvs",
                                    "camelotv2"
                                ]
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getTokenStats": {
            "GET": {
                "description": "Get ERC20 token stats",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-token-stats",
                "route": "erc20/:address/stats",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the erc20 token",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getBlockByHash": {
            "GET": {
                "description": "Get block by hash",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-block",
                "route": "block/:block_number_or_hash",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "block_number_or_hash": {
                            "default": {},
                            "description": "The block number or block hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__block_number_or_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getBlockByDate": {
            "GET": {
                "description": "Get block by date",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-date-to-block",
                "route": "dateToBlock",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "date": {
                            "default": {},
                            "description": "Unix date in seconds or a datestring (any format that is accepted by momentjs)",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__date",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        }
                    }
                }
            }
        },
        "getDecodedWalletTransaction": {
            "GET": {
                "description": "Get decoded transactions by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
                "route": ":address/verbose",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getTransactionByHash": {
            "GET": {
                "description": "Get transaction by hash",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-transaction",
                "route": "transaction/:transaction_hash",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "transaction_hash": {
                            "default": {},
                            "description": "The transaction hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__transaction_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getDecodedTransactionByHash": {
            "GET": {
                "description": "Get decoded transaction by hash",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-transaction",
                "route": "transaction/:transaction_hash/verbose",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "transaction_hash": {
                            "default": {},
                            "description": "The transaction hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__transaction_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getInternalTransactions": {
            "GET": {
                "description": "Get internal transactions by transaction hash",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-internal-transactions",
                "route": "transaction/:transaction_hash/internal-transactions",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "transaction_hash": {
                            "default": {},
                            "description": "The transaction hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__transaction_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getWalletTransactions": {
            "GET": {
                "description": "Get native transactions by wallet",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-transactions",
                "route": ":address",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the wallet",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "include": {
                            "default": {},
                            "description": "If the result should contain the internal transactions.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "internal_transactions"
                                ]
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getContractLogs": {
            "GET": {
                "description": "Get logs by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-contract-logs",
                "route": ":address/logs",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "block_number": {
                            "default": {},
                            "description": "The block numberProvide the param 'block_numer' or ('from_block' and / or 'to_block')If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__block_number",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the logsProvide the param 'block_numer' or ('from_block' and / or 'to_block')If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the logsProvide the param 'block_numer' or ('from_block' and / or 'to_block')If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the logs (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.If 'from_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the logs up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.If 'to_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "topic0": {
                            "default": {},
                            "description": "topic0",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__topic0",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getContractEvents": {
            "POST": {
                "description": "Get events by contract",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-contract-events",
                "route": ":address/events",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "address": {
                            "default": {},
                            "description": "The address of the contract",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__address",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        },
                        "from_block": {
                            "default": {},
                            "description": "The minimum block number from which to get the logsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_block": {
                            "default": {},
                            "description": "The maximum block number from which to get the logs.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_block",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "from_date": {
                            "default": {},
                            "description": "The start date from which to get the logs (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__from_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "to_date": {
                            "default": {},
                            "description": "Get the logs up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__to_date",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "topic": {
                            "default": {},
                            "description": "The topic of the event",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__topic",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "offset": {
                            "default": {},
                            "description": "offset",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__offset",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "limit": {
                            "default": {},
                            "description": "The desired page size of the result.",
                            "type": "number",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__limit",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        },
                        "cursor": {
                            "default": {},
                            "description": "The cursor returned in the previous response (used for getting the next page).",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "validation__cursor",
                                "description": "",
                                "enum": null
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "getBlockStats": {
            "GET": {
                "description": "Get block stats",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-block-stats",
                "route": "block/:block_number_or_hash/stats",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "block_number_or_hash": {
                            "default": {},
                            "description": "The block number or hash",
                            "type": "string",
                            "queryType": "path",
                            "validation": {
                                "regex": "validation__block_number_or_hash",
                                "description": "",
                                "enum": null
                            },
                            "required": true
                        },
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        },
        "reviewContracts": {
            "POST": {
                "description": "Review contracts",
                "reference": "https://docs.moralis.io/web3-data-api/evm/reference/contracts-review",
                "route": "contracts-review",
                "spamDetection": false,
                "input": {
                    "query": {},
                    "variables": {
                        "chain": {
                            "default": {},
                            "description": "The chain to query",
                            "type": "string",
                            "queryType": "query",
                            "validation": {
                                "regex": "",
                                "description": "Only use one of the following options",
                                "enum": [
                                    "eth",
                                    "0x1",
                                    "goerli",
                                    "0x5",
                                    "sepolia",
                                    "0xaa36a7",
                                    "polygon",
                                    "0x89",
                                    "mumbai",
                                    "0x13881",
                                    "bsc",
                                    "0x38",
                                    "bsc testnet",
                                    "0x61",
                                    "avalanche",
                                    "0xa86a",
                                    "fantom",
                                    "0xfa",
                                    "palm",
                                    "0x2a15c308d",
                                    "cronos",
                                    "0x19",
                                    "arbitrum",
                                    "0xa4b1",
                                    "gnosis",
                                    "0x64",
                                    "gnosis testnet",
                                    "0x27d8",
                                    "chiliz",
                                    "0x15b38",
                                    "chiliz testnet",
                                    "0x15b32",
                                    "base",
                                    "0x2105",
                                    "base testnet",
                                    "0x14a33"
                                ]
                            },
                            "required": false
                        }
                    }
                }
            }
        }
    },
    "validation": {
        "address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "chains": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "to_block": {
            "regex": /^\d+$/,
            "description": ""
        },
        "wallet_addresses": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "limit": {
            "regex": /^\d+$/,
            "description": ""
        },
        "token_addresses": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "cursor": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "from_block": {
            "regex": /^\d+$/,
            "description": ""
        },
        "from_date": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "to_date": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "format": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "domain": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "currency": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "totalRanges": {
            "regex":  /^\d+$/,
            "description": ""
        },
        "range": {
            "regex": /^\d+$/,
            "description": ""
        },
        "token_id": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "block_number_or_hash": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "marketplace": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "days": {
            "regex": /^\d+$/,
            "description": ""
        },
        "symbols": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "addresses": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "owner_address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "spender_address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "pair_address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "token0_address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "token1_address": {
            "regex": /^0x[a-fA-F0-9]{40}$/,
            "description": ""
        },
        "date": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "transaction_hash": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "block_number": {
            "regex": /^\d+$/,
            "description": ""
        },
        "topic0": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "topic": {
            "regex": /^(.|\s)*$/,
            "description": ""
        },
        "offset": {
            "regex": /^\d+$/,
            "description": ""
        }
    }
}