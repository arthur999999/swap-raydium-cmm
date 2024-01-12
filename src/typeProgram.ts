export type Swap = {
  "version": "0.1.0",
  "name": "amm_v3",
  "instructions": [
    {
      "name": "createAmmConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "tickSpacing",
          "type": "u16"
        },
        {
          "name": "tradeFeeRate",
          "type": "u32"
        },
        {
          "name": "protocolFeeRate",
          "type": "u32"
        },
        {
          "name": "fundFeeRate",
          "type": "u32"
        }
      ]
    },
    {
      "name": "updateAmmConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "u32"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "poolCreator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayBitmap",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sqrtPriceX64",
          "type": "u128"
        },
        {
          "name": "openTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updatePoolStatus",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "status",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createOperationAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "operationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateOperationAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "operationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "keys",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "transferRewardOwner",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initializeReward",
      "accounts": [
        {
          "name": "rewardFunder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "operationState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": {
            "defined": "InitializeRewardParam"
          }
        }
      ]
    },
    {
      "name": "collectRemainingRewards",
      "accounts": [
        {
          "name": "rewardFunder",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardTokenVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardVaultMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateRewardInfos",
      "accounts": [
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setRewardParams",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "operationState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u8"
        },
        {
          "name": "emissionsPerSecondX64",
          "type": "u128"
        },
        {
          "name": "openTime",
          "type": "u64"
        },
        {
          "name": "endTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectProtocolFee",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Requested",
          "type": "u64"
        },
        {
          "name": "amount1Requested",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectFundFee",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Requested",
          "type": "u64"
        },
        {
          "name": "amount1Requested",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionNftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayLowerStartIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayUpperStartIndex",
          "type": "i32"
        },
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPositionV2",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionNftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault1Mint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayLowerStartIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayUpperStartIndex",
          "type": "i32"
        },
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        },
        {
          "name": "withMatedata",
          "type": "bool"
        },
        {
          "name": "baseFlag",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "closePosition",
      "accounts": [
        {
          "name": "nftOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increaseLiquidity",
      "accounts": [
        {
          "name": "nftOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseLiquidityV2",
      "accounts": [
        {
          "name": "nftOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault1Mint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        },
        {
          "name": "baseFlag",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "decreaseLiquidity",
      "accounts": [
        {
          "name": "nftOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decreaseLiquidityV2",
      "accounts": [
        {
          "name": "nftOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault1Mint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tickArray",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swapV2",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputVaultMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "outputVaultMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swapRouterBaseIn",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "amountOutMinimum",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "AmmConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "protocolFeeRate",
            "type": "u32"
          },
          {
            "name": "tradeFeeRate",
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "fundFeeRate",
            "type": "u32"
          },
          {
            "name": "paddingU32",
            "type": "u32"
          },
          {
            "name": "fundOwner",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OperationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "operationOwners",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "whitelistMints",
            "type": {
              "array": [
                "publicKey",
                100
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ObservationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "observations",
            "type": {
              "array": [
                {
                  "defined": "Observation"
                },
                1000
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u128",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PersonalPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "tickLowerIndex",
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "type": "i32"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0LastX64",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1LastX64",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "PositionRewardInfo"
                },
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PoolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "ammConfig",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenMint0",
            "type": "publicKey"
          },
          {
            "name": "tokenMint1",
            "type": "publicKey"
          },
          {
            "name": "tokenVault0",
            "type": "publicKey"
          },
          {
            "name": "tokenVault1",
            "type": "publicKey"
          },
          {
            "name": "observationKey",
            "type": "publicKey"
          },
          {
            "name": "mintDecimals0",
            "type": "u8"
          },
          {
            "name": "mintDecimals1",
            "type": "u8"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "sqrtPriceX64",
            "type": "u128"
          },
          {
            "name": "tickCurrent",
            "type": "i32"
          },
          {
            "name": "observationIndex",
            "type": "u16"
          },
          {
            "name": "observationUpdateDuration",
            "type": "u16"
          },
          {
            "name": "feeGrowthGlobal0X64",
            "type": "u128"
          },
          {
            "name": "feeGrowthGlobal1X64",
            "type": "u128"
          },
          {
            "name": "protocolFeesToken0",
            "type": "u64"
          },
          {
            "name": "protocolFeesToken1",
            "type": "u64"
          },
          {
            "name": "swapInAmountToken0",
            "type": "u128"
          },
          {
            "name": "swapOutAmountToken1",
            "type": "u128"
          },
          {
            "name": "swapInAmountToken1",
            "type": "u128"
          },
          {
            "name": "swapOutAmountToken0",
            "type": "u128"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "RewardInfo"
                },
                3
              ]
            }
          },
          {
            "name": "tickArrayBitmap",
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          },
          {
            "name": "totalFeesToken0",
            "type": "u64"
          },
          {
            "name": "totalFeesClaimedToken0",
            "type": "u64"
          },
          {
            "name": "totalFeesToken1",
            "type": "u64"
          },
          {
            "name": "totalFeesClaimedToken1",
            "type": "u64"
          },
          {
            "name": "fundFeesToken0",
            "type": "u64"
          },
          {
            "name": "fundFeesToken1",
            "type": "u64"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                25
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ProtocolPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "tickLowerIndex",
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "type": "i32"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0LastX64",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1LastX64",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardGrowthInside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TickArrayState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "startTickIndex",
            "type": "i32"
          },
          {
            "name": "ticks",
            "type": {
              "array": [
                {
                  "defined": "TickState"
                },
                60
              ]
            }
          },
          {
            "name": "initializedTickCount",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                115
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TickArrayBitmapExtension",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "positiveTickArrayBitmap",
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                14
              ]
            }
          },
          {
            "name": "negativeTickArrayBitmap",
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                14
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeRewardParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "Observation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "blockTimestamp",
            "type": "u32"
          },
          {
            "name": "sqrtPriceX64",
            "type": "u128"
          },
          {
            "name": "cumulativeTimePriceX64",
            "type": "u128"
          },
          {
            "name": "padding",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "PositionRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "growthInsideLastX64",
            "type": "u128"
          },
          {
            "name": "rewardAmountOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardState",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          },
          {
            "name": "rewardTotalEmissioned",
            "type": "u64"
          },
          {
            "name": "rewardClaimed",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "rewardGrowthGlobalX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "TickState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "liquidityNet",
            "type": "i128"
          },
          {
            "name": "liquidityGross",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside0X64",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside1X64",
            "type": "u128"
          },
          {
            "name": "rewardGrowthsOutsideX64",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u32",
                13
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PoolStatusBitIndex",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "OpenPositionOrIncreaseLiquidity"
          },
          {
            "name": "DecreaseLiquidity"
          },
          {
            "name": "CollectFee"
          },
          {
            "name": "CollectReward"
          },
          {
            "name": "Swap"
          }
        ]
      }
    },
    {
      "name": "PoolStatusBitFlag",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Enable"
          },
          {
            "name": "Disable"
          }
        ]
      }
    },
    {
      "name": "RewardState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "Initialized"
          },
          {
            "name": "Opening"
          },
          {
            "name": "Ended"
          }
        ]
      }
    },
    {
      "name": "TickArryBitmap",
      "type": {
        "kind": "alias",
        "value": {
          "array": [
            "u64",
            8
          ]
        }
      }
    }
  ],
  "events": [
    {
      "name": "ConfigChangeEvent",
      "fields": [
        {
          "name": "index",
          "type": "u16",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": true
        },
        {
          "name": "protocolFeeRate",
          "type": "u32",
          "index": false
        },
        {
          "name": "tradeFeeRate",
          "type": "u32",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        },
        {
          "name": "fundFeeRate",
          "type": "u32",
          "index": false
        },
        {
          "name": "fundOwner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePersonalPositionEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLowerIndex",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpperIndex",
          "type": "i32",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "depositAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "depositAmount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "depositAmount0TransferFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "depositAmount1TransferFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount0TransferFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1TransferFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DecreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "decreaseAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "decreaseAmount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "rewardAmounts",
          "type": {
            "array": [
              "u64",
              3
            ]
          },
          "index": false
        },
        {
          "name": "transferFee0",
          "type": "u64",
          "index": false
        },
        {
          "name": "transferFee1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LiquidityCalculateEvent",
      "fields": [
        {
          "name": "poolLiquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "poolSqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "poolTick",
          "type": "i32",
          "index": false
        },
        {
          "name": "calcAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "calcAmount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFeeOwed0",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFeeOwed1",
          "type": "u64",
          "index": false
        },
        {
          "name": "transferFee0",
          "type": "u64",
          "index": false
        },
        {
          "name": "transferFee1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CollectPersonalFeeEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateRewardInfosEvent",
      "fields": [
        {
          "name": "rewardGrowthGlobalX64",
          "type": {
            "array": [
              "u128",
              3
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PoolCreatedEvent",
      "fields": [
        {
          "name": "tokenMint0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        },
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        },
        {
          "name": "tokenVault0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault1",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CollectProtocolFeeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SwapEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "transferFee0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        },
        {
          "name": "transferFee1",
          "type": "u64",
          "index": false
        },
        {
          "name": "zeroForOne",
          "type": "bool",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        }
      ]
    },
    {
      "name": "LiquidityChangeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "liquidityBefore",
          "type": "u128",
          "index": false
        },
        {
          "name": "liquidityAfter",
          "type": "u128",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "LOK",
      "msg": "LOK"
    },
    {
      "code": 6001,
      "name": "NotApproved",
      "msg": "Not approved"
    },
    {
      "code": 6002,
      "name": "InvalidUpdateConfigFlag",
      "msg": "invalid update amm config flag"
    },
    {
      "code": 6003,
      "name": "AccountLack",
      "msg": "Account lack"
    },
    {
      "code": 6004,
      "name": "ClosePositionErr",
      "msg": "Remove liquitity, collect fees owed and reward then you can close position account"
    },
    {
      "code": 6005,
      "name": "ZeroMintAmount",
      "msg": "Minting amount should be greater than 0"
    },
    {
      "code": 6006,
      "name": "InvaildTickIndex",
      "msg": "Tick out of range"
    },
    {
      "code": 6007,
      "name": "TickInvaildOrder",
      "msg": "The lower tick must be below the upper tick"
    },
    {
      "code": 6008,
      "name": "TickLowerOverflow",
      "msg": "The tick must be greater, or equal to the minimum tick(-221818)"
    },
    {
      "code": 6009,
      "name": "TickUpperOverflow",
      "msg": "The tick must be lesser than, or equal to the maximum tick(221818)"
    },
    {
      "code": 6010,
      "name": "TickAndSpacingNotMatch",
      "msg": "tick % tick_spacing must be zero"
    },
    {
      "code": 6011,
      "name": "InvalidTickArray",
      "msg": "Invaild tick array account"
    },
    {
      "code": 6012,
      "name": "InvalidTickArrayBoundary",
      "msg": "Invaild tick array boundary"
    },
    {
      "code": 6013,
      "name": "SqrtPriceLimitOverflow",
      "msg": "Square root price limit overflow"
    },
    {
      "code": 6014,
      "name": "SqrtPriceX64",
      "msg": "sqrt_price_x64 out of range"
    },
    {
      "code": 6015,
      "name": "LiquiditySubValueErr",
      "msg": "Liquidity sub delta L must be smaller than before"
    },
    {
      "code": 6016,
      "name": "LiquidityAddValueErr",
      "msg": "Liquidity add delta L must be greater, or equal to before"
    },
    {
      "code": 6017,
      "name": "InvaildLiquidity",
      "msg": "Invaild liquidity when update position"
    },
    {
      "code": 6018,
      "name": "ForbidBothZeroForSupplyLiquidity",
      "msg": "Both token amount must not be zero while supply liquidity"
    },
    {
      "code": 6019,
      "name": "LiquidityInsufficient",
      "msg": "Liquidity insufficient"
    },
    {
      "code": 6020,
      "name": "TransactionTooOld",
      "msg": "Transaction too old"
    },
    {
      "code": 6021,
      "name": "PriceSlippageCheck",
      "msg": "Price slippage check"
    },
    {
      "code": 6022,
      "name": "TooLittleOutputReceived",
      "msg": "Too little output received"
    },
    {
      "code": 6023,
      "name": "TooMuchInputPaid",
      "msg": "Too much input paid"
    },
    {
      "code": 6024,
      "name": "InvaildSwapAmountSpecified",
      "msg": "Swap special amount can not be zero"
    },
    {
      "code": 6025,
      "name": "InvalidInputPoolVault",
      "msg": "Input pool vault is invalid"
    },
    {
      "code": 6026,
      "name": "TooSmallInputOrOutputAmount",
      "msg": "Swap input or output amount is too small"
    },
    {
      "code": 6027,
      "name": "NotEnoughTickArrayAccount",
      "msg": "Not enought tick array account"
    },
    {
      "code": 6028,
      "name": "InvalidFirstTickArrayAccount",
      "msg": "Invaild first tick array account"
    },
    {
      "code": 6029,
      "name": "InvalidRewardIndex",
      "msg": "Invalid reward index"
    },
    {
      "code": 6030,
      "name": "FullRewardInfo",
      "msg": "The init reward token reach to the max"
    },
    {
      "code": 6031,
      "name": "RewardTokenAlreadyInUse",
      "msg": "The init reward token already in use"
    },
    {
      "code": 6032,
      "name": "ExceptPoolVaultMint",
      "msg": "The reward tokens must contain one of pool vault mint except the last reward"
    },
    {
      "code": 6033,
      "name": "InvalidRewardInitParam",
      "msg": "Invalid reward init param"
    },
    {
      "code": 6034,
      "name": "InvalidRewardDesiredAmount",
      "msg": "Invalid collect reward desired amount"
    },
    {
      "code": 6035,
      "name": "InvalidRewardInputAccountNumber",
      "msg": "Invalid collect reward input account number"
    },
    {
      "code": 6036,
      "name": "InvalidRewardPeriod",
      "msg": "Invalid reward period"
    },
    {
      "code": 6037,
      "name": "NotApproveUpdateRewardEmissiones",
      "msg": "Modification of emissiones is allowed within 72 hours from the end of the previous cycle"
    },
    {
      "code": 6038,
      "name": "UnInitializedRewardInfo",
      "msg": "uninitialized reward info"
    },
    {
      "code": 6039,
      "name": "NotSupportMint",
      "msg": "Not support token_2022 mint extension"
    },
    {
      "code": 6040,
      "name": "MissingTickArrayBitmapExtensionAccount",
      "msg": "Missing tickarray bitmap extension account"
    },
    {
      "code": 6041,
      "name": "InsufficientLiquidityForDirection",
      "msg": "Insufficient liquidity for this direction"
    }
  ]
}

export type Swap2 = {
  "version": "0.3.0",
  "name": "raydium_amm",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTargetOrdersAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize2",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "splAssociatedTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        },
        {
          "name": "initPcAmount",
          "type": "u64"
        },
        {
          "name": "initCoinAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "monitorStep",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumReqQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "planOrderLimit",
          "type": "u16"
        },
        {
          "name": "placeOrderLimit",
          "type": "u16"
        },
        {
          "name": "cancelOrderLimit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "serumEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxCoinAmount",
          "type": "u64"
        },
        {
          "name": "maxPcAmount",
          "type": "u64"
        },
        {
          "name": "baseSide",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "uerCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "uerPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "serumEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "migrateToOpenBook",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newAmmOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newSerumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newSerumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setParams",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAdminAccount",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "value",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "newPubkey",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "fees",
          "type": {
            "option": {
              "defined": "Fees"
            }
          }
        },
        {
          "name": "lastOrderDistance",
          "type": {
            "option": {
              "defined": "LastOrderDistance"
            }
          }
        },
        {
          "name": "needTakeAmounts",
          "type": {
            "option": {
              "defined": "NeedTake"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawPnl",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinPnlTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pcPnlTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnlOwnerAccount",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSrm",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOwnerAccount",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "srmToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destSrmToken",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapBaseIn",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "uerSourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "uerDestinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "preInitialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapBaseOut",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "uerSourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "uerDestinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "simulateInfo",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "swapBaseInValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseIn"
            }
          }
        },
        {
          "name": "swapBaseOutValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseOut"
            }
          }
        }
      ]
    },
    {
      "name": "adminCancelOrders",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammOwnerAccount",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumCoinVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumPcVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "TargetOrders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "buyOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "targetX",
            "type": "u128"
          },
          {
            "name": "targetY",
            "type": "u128"
          },
          {
            "name": "planXBuy",
            "type": "u128"
          },
          {
            "name": "planYBuy",
            "type": "u128"
          },
          {
            "name": "planXSell",
            "type": "u128"
          },
          {
            "name": "planYSell",
            "type": "u128"
          },
          {
            "name": "placedX",
            "type": "u128"
          },
          {
            "name": "placedY",
            "type": "u128"
          },
          {
            "name": "calcPnlX",
            "type": "u128"
          },
          {
            "name": "calcPnlY",
            "type": "u128"
          },
          {
            "name": "sellOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "replaceBuyClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "replaceSellClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          },
          {
            "name": "planOrdersCur",
            "type": "u64"
          },
          {
            "name": "placeOrdersCur",
            "type": "u64"
          },
          {
            "name": "validBuyOrderNum",
            "type": "u64"
          },
          {
            "name": "validSellOrderNum",
            "type": "u64"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "freeSlotBits",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "Fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSeparateNumerator",
            "type": "u64"
          },
          {
            "name": "minSeparateDenominator",
            "type": "u64"
          },
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "type": "u64"
          },
          {
            "name": "pnlNumerator",
            "type": "u64"
          },
          {
            "name": "pnlDenominator",
            "type": "u64"
          },
          {
            "name": "swapFeeNumerator",
            "type": "u64"
          },
          {
            "name": "swapFeeDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AmmInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "orderNum",
            "type": "u64"
          },
          {
            "name": "depth",
            "type": "u64"
          },
          {
            "name": "coinDecimals",
            "type": "u64"
          },
          {
            "name": "pcDecimals",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "resetFlag",
            "type": "u64"
          },
          {
            "name": "minSize",
            "type": "u64"
          },
          {
            "name": "volMaxCutRatio",
            "type": "u64"
          },
          {
            "name": "amountWave",
            "type": "u64"
          },
          {
            "name": "coinLotSize",
            "type": "u64"
          },
          {
            "name": "pcLotSize",
            "type": "u64"
          },
          {
            "name": "minPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "maxPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "sysDecimalValue",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "outPut",
            "type": {
              "defined": "OutPutData"
            }
          },
          {
            "name": "tokenCoin",
            "type": "publicKey"
          },
          {
            "name": "tokenPc",
            "type": "publicKey"
          },
          {
            "name": "coinMint",
            "type": "publicKey"
          },
          {
            "name": "pcMint",
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "type": "publicKey"
          },
          {
            "name": "openOrders",
            "type": "publicKey"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "serumDex",
            "type": "publicKey"
          },
          {
            "name": "targetOrders",
            "type": "publicKey"
          },
          {
            "name": "withdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "tokenTempLp",
            "type": "publicKey"
          },
          {
            "name": "ammOwner",
            "type": "publicKey"
          },
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "WithdrawDestToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawAmount",
            "type": "u64"
          },
          {
            "name": "coinAmount",
            "type": "u64"
          },
          {
            "name": "pcAmount",
            "type": "u64"
          },
          {
            "name": "destTokenCoin",
            "type": "publicKey"
          },
          {
            "name": "destTokenPc",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "WithdrawQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "head",
            "type": "u64"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "buf",
            "type": {
              "array": [
                {
                  "defined": "WithdrawDestToken"
                },
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TargetOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "vol",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "OutPutData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "needTakePnlCoin",
            "type": "u64"
          },
          {
            "name": "needTakePnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlCoin",
            "type": "u64"
          },
          {
            "name": "poolOpenTime",
            "type": "u64"
          },
          {
            "name": "punishPcAmount",
            "type": "u64"
          },
          {
            "name": "punishCoinAmount",
            "type": "u64"
          },
          {
            "name": "orderbookToInitTime",
            "type": "u64"
          },
          {
            "name": "swapCoinInAmount",
            "type": "u128"
          },
          {
            "name": "swapPcOutAmount",
            "type": "u128"
          },
          {
            "name": "swapTakePcFee",
            "type": "u64"
          },
          {
            "name": "swapPcInAmount",
            "type": "u128"
          },
          {
            "name": "swapCoinOutAmount",
            "type": "u128"
          },
          {
            "name": "swapTakeCoinFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AmmConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pnlOwner",
            "type": "publicKey"
          },
          {
            "name": "cancelOwner",
            "type": "publicKey"
          },
          {
            "name": "pending1",
            "type": {
              "array": [
                "u64",
                28
              ]
            }
          },
          {
            "name": "pending2",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "LastOrderDistance",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "NeedTake",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "needTakePc",
            "type": "u64"
          },
          {
            "name": "needTakeCoin",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseIn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "minimumAmountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseOut",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxAmountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 0,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 1,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 2,
      "name": "ExpectedMint",
      "msg": "ExpectedMint"
    },
    {
      "code": 3,
      "name": "ExpectedAccount",
      "msg": "ExpectedAccount"
    },
    {
      "code": 4,
      "name": "InvalidCoinVault",
      "msg": "InvalidCoinVault"
    },
    {
      "code": 5,
      "name": "InvalidPCVault",
      "msg": "InvalidPCVault"
    },
    {
      "code": 6,
      "name": "InvalidTokenLP",
      "msg": "InvalidTokenLP"
    },
    {
      "code": 7,
      "name": "InvalidDestTokenCoin",
      "msg": "InvalidDestTokenCoin"
    },
    {
      "code": 8,
      "name": "InvalidDestTokenPC",
      "msg": "InvalidDestTokenPC"
    },
    {
      "code": 9,
      "name": "InvalidPoolMint",
      "msg": "InvalidPoolMint"
    },
    {
      "code": 10,
      "name": "InvalidOpenOrders",
      "msg": "InvalidOpenOrders"
    },
    {
      "code": 11,
      "name": "InvalidSerumMarket",
      "msg": "InvalidSerumMarket"
    },
    {
      "code": 12,
      "name": "InvalidSerumProgram",
      "msg": "InvalidSerumProgram"
    },
    {
      "code": 13,
      "name": "InvalidTargetOrders",
      "msg": "InvalidTargetOrders"
    },
    {
      "code": 14,
      "name": "InvalidWithdrawQueue",
      "msg": "InvalidWithdrawQueue"
    },
    {
      "code": 15,
      "name": "InvalidTempLp",
      "msg": "InvalidTempLp"
    },
    {
      "code": 16,
      "name": "InvalidCoinMint",
      "msg": "InvalidCoinMint"
    },
    {
      "code": 17,
      "name": "InvalidPCMint",
      "msg": "InvalidPCMint"
    },
    {
      "code": 18,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 19,
      "name": "InvalidSupply",
      "msg": "InvalidSupply"
    },
    {
      "code": 20,
      "name": "InvalidDelegate",
      "msg": "InvalidDelegate"
    },
    {
      "code": 21,
      "name": "InvalidSignAccount",
      "msg": "Invalid Sign Account"
    },
    {
      "code": 22,
      "name": "InvalidStatus",
      "msg": "InvalidStatus"
    },
    {
      "code": 23,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 24,
      "name": "WrongAccountsNumber",
      "msg": "Wrong accounts number"
    },
    {
      "code": 25,
      "name": "WithdrawTransferBusy",
      "msg": "Withdraw_transfer is busy"
    },
    {
      "code": 26,
      "name": "WithdrawQueueFull",
      "msg": "WithdrawQueue is full"
    },
    {
      "code": 27,
      "name": "WithdrawQueueEmpty",
      "msg": "WithdrawQueue is empty"
    },
    {
      "code": 28,
      "name": "InvalidParamsSet",
      "msg": "Params Set is invalid"
    },
    {
      "code": 29,
      "name": "InvalidInput",
      "msg": "InvalidInput"
    },
    {
      "code": 30,
      "name": "ExceededSlippage",
      "msg": "instruction exceeds desired slippage limit"
    },
    {
      "code": 31,
      "name": "CalculationExRateFailure",
      "msg": "CalculationExRateFailure"
    },
    {
      "code": 32,
      "name": "CheckedSubOverflow",
      "msg": "Checked_Sub Overflow"
    },
    {
      "code": 33,
      "name": "CheckedAddOverflow",
      "msg": "Checked_Add Overflow"
    },
    {
      "code": 34,
      "name": "CheckedMulOverflow",
      "msg": "Checked_Mul Overflow"
    },
    {
      "code": 35,
      "name": "CheckedDivOverflow",
      "msg": "Checked_Div Overflow"
    },
    {
      "code": 36,
      "name": "CheckedEmptyFunds",
      "msg": "Empty Funds"
    },
    {
      "code": 37,
      "name": "CalcPnlError",
      "msg": "Calc pnl error"
    },
    {
      "code": 38,
      "name": "InvalidSplTokenProgram",
      "msg": "InvalidSplTokenProgram"
    },
    {
      "code": 39,
      "name": "TakePnlError",
      "msg": "Take Pnl error"
    },
    {
      "code": 40,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 41,
      "name": "ConversionFailure",
      "msg": "Conversion to u64 failed with an overflow or underflow"
    },
    {
      "code": 42,
      "name": "InvalidUserToken",
      "msg": "user token input does not match amm"
    },
    {
      "code": 43,
      "name": "InvalidSrmMint",
      "msg": "InvalidSrmMint"
    },
    {
      "code": 44,
      "name": "InvalidSrmToken",
      "msg": "InvalidSrmToken"
    },
    {
      "code": 45,
      "name": "TooManyOpenOrders",
      "msg": "TooManyOpenOrders"
    },
    {
      "code": 46,
      "name": "OrderAtSlotIsPlaced",
      "msg": "OrderAtSlotIsPlaced"
    },
    {
      "code": 47,
      "name": "InvalidSysProgramAddress",
      "msg": "InvalidSysProgramAddress"
    },
    {
      "code": 48,
      "name": "InvalidFee",
      "msg": "The provided fee does not match the program owner's constraints"
    },
    {
      "code": 49,
      "name": "RepeatCreateAmm",
      "msg": "Repeat create amm about market"
    },
    {
      "code": 50,
      "name": "NotAllowZeroLP",
      "msg": "Not allow Zero LP"
    },
    {
      "code": 51,
      "name": "InvalidCloseAuthority",
      "msg": "Token account has a close authority"
    },
    {
      "code": 52,
      "name": "InvalidFreezeAuthority",
      "msg": "Pool token mint has a freeze authority"
    },
    {
      "code": 53,
      "name": "InvalidReferPCMint",
      "msg": "InvalidReferPCMint"
    },
    {
      "code": 54,
      "name": "InvalidConfigAccount",
      "msg": "InvalidConfigAccount"
    },
    {
      "code": 55,
      "name": "RepeatCreateConfigAccount",
      "msg": "Repeat create staking config account"
    },
    {
      "code": 56,
      "name": "UnknownAmmError",
      "msg": "Unknown Amm Error"
    }
  ]
}