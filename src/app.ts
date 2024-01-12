import { Connection, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { Keypair } from "@solana/web3.js"
import dotenv from "dotenv";
import { Program, BN, AnchorProvider, Wallet, web3 } from "@coral-xyz/anchor";
import idl from "./idl.json";
import idl2 from "./idl2.json";
import { Swap, Swap2 } from "./typeProgram";
import * as spl from "@solana/spl-token";
import idltest from "../idltest.json";
import { BigNumber} from "bignumber.js";
import { publicKey } from "@coral-xyz/anchor/dist/cjs/utils";
import { SwapType } from "./typeProgram2";
dotenv.config()

const connection =  new Connection("https://solana-mainnet.core.chainstack.com/1dbb0c6e6cca6e8af72b30524b48c4d2", "confirmed");



//const lppub = new PublicKey("13uCPybNakXHGVd2DDVB7o2uwXuf9GqPFkvJMVgKy6UJ");
const rayCMMProgram = new PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK");
//const recivePub = new PublicKey("3jxbH9adwU9r36gx7VN6riQU2FaUAtqGKcDw8QEBqmL2");
const RAYDIUM_AMM_PROGRAM_ID = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");

const wallet  = generateDefaultKey()

console.log(wallet.publicKey);



 const keys = {
     ammConfig: new PublicKey("HfERMT5DRA6C1TAqecrJQFpmkf3wsWTMncqnj3RDg5aw"),
     poolState: new PublicKey("FFCfYM8GyV836cjxFeqgCxZ4ujPNQ1bg6TC6zhF2oUFZ"),
     observationState: new PublicKey("DjAfM5zmca26HJHjbFtYjzfLFns25cGqz66AkJeXzXPh"),
     tokenProgram: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
     inputVault: new PublicKey("GYrh5ym59gAD7yaNizFfGshhQk9BDt3oVXTtZxDqiE4J"),
     outputVault: new PublicKey("6Su1GV3xTB8NM8JNZA2xTxvAcMUzJbu23ovKaRnHLtPn"),
     inputVaultMint: new PublicKey("So11111111111111111111111111111111111111112"),
     outputVaultMint: new PublicKey("AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR"),
     tickArray: new PublicKey("F3FT5YV18K1PHMnBCaHxd17qi1dCp3UKEmywL3JPAb3n")
}

const keys2 = {
    id: new PublicKey("2bnZ1edbvK3CK3LTNZ5jH9anvXYCmzPR4W2HQ6Ngsv5K"),
    baseMint: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
    quoteMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    authority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
    openOrders: new PublicKey("EzYB1U93e8E1KGJdUzmnwgNBFMP9E1XAuyosmiPGLAvD"),
    targetOrders: new PublicKey("DVxJDo3E9zfGgvSkC2DYS5fsv5AyXA7gXpcs1fHFrP3y"),
    baseVault: new PublicKey("FpFV46UVvRtcrRvYtKYgJpJtP1tZkvssjhrLUfoj8Cvo"),
    quoteVault: new PublicKey("GzwX68f1ZF4dKnAJ58RdET8sPvvnYktbDEHmjoGw7Umk"),
    marketProgramId: new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),
    marketId: new PublicKey("Di66GTLsV64JgCCYGVcY21RZ173BHkjJVgPyezNN7P1K"),
    marketAuthority: new PublicKey("FiyZW6n5VE64Yubn2PUFAxbmB2FZXhYce74LzJUhqSZg"),
    marketBaseVault: new PublicKey("22a8dDQwHmmnW4M4WuSXHC9NdQAufZ2V8at3EtPzBqFj"),
    marketQuoteVault: new PublicKey("5Wu76Qx7EoiR79zVVV49cZDYZ5csZaKFiHKYtCjF9FNU"),
    marketBids: new PublicKey("2UabAccF1AFPcNqv9D46JgyGnErnaYAJuCwyaT5dCkHc"),
    marketAsks: new PublicKey("9umNLTbks7S51TEB8XF4jeCxwyq3qmdHrFDMFB8cT1gv"),
    marketEventQueue: new PublicKey("EYU32k5waRUxF521k2KFSuhEj11HQvg4MbQ9tFXuixLi"),
    tokenProgram: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
}



 function generateProgram() {

     const a = JSON.stringify(idl);
     let eWallet = new Wallet(wallet)
     const b = JSON.parse(a)
     const proivider = new AnchorProvider(
         connection,
         eWallet,
         AnchorProvider.defaultOptions()
     )
   const program = new Program<Swap>( b, rayCMMProgram, proivider )
  return program;

    
 }

function generateProgram2() {

    const a = JSON.stringify(idltest);
    let eWallet = new Wallet(wallet)
    const b = JSON.parse(a)
    const proivider = new AnchorProvider(
        connection,
        eWallet,
        AnchorProvider.defaultOptions()
    )
    const program = new Program<SwapType>( b, RAYDIUM_AMM_PROGRAM_ID, proivider )
    return program;

    
}





function generateDefaultKey(){

    let str: any = process.env.SEED_STRING;
    const array = str?.split(",")
    const arrayNumber = []
    for (let elemenet of array) {
        arrayNumber.push(Number(elemenet))
    }

   const keypairDefault = Keypair.fromSecretKey(new Uint8Array(arrayNumber))
   return keypairDefault;
    

}

 async function swap() {

    const tokenAccountInput = await spl.getAssociatedTokenAddress(  keys.inputVaultMint, wallet.publicKey );

    const tokenAccountOutput = await spl.getAssociatedTokenAddress( keys.outputVaultMint, wallet.publicKey );

    let num1 = new BN(100000);
    let num2 = new BN(0);
    let num3 = new BN(0);

    const program = generateProgram()

    const tx = await program.methods.swap(num1, num2, num3, true).accounts({
         payer: wallet.publicKey,
         ammConfig:keys.ammConfig ,
         poolState: keys.poolState,
         inputTokenAccount: tokenAccountInput ,
         outputTokenAccount: tokenAccountOutput,
         inputVault: keys.inputVault,
         outputVault: keys.outputVault,
         observationState: keys.observationState,
         tokenProgram: keys.tokenProgram,
         tickArray: keys.tickArray

     }).signers([wallet]).rpc({skipPreflight: true})
    console.log(tx)
     console.log("foi")
 }

async function swap2(){
 
    const program = generateProgram2()

    const tokenAccountInput = await spl.getAssociatedTokenAddress( keys2.baseMint, wallet.publicKey );

    const tokenAccountOutput = await spl.getAssociatedTokenAddress( keys2.quoteMint, wallet.publicKey );

    let num1 = new BN(100000);
    let num2 = new BN(0);

    const tx = await program.methods.swapBaseIn(num1, num2).accounts({
        tokenProgram: keys2.tokenProgram,
        amm:keys2.id,
        ammAuthority: keys2.authority,
        ammOpenOrders: keys2.openOrders,
        ammTargetOrders: keys2.targetOrders,
        poolCoinTokenAccount: keys2.baseVault,
        poolPcTokenAccount: keys2.quoteVault,
        serumProgram: keys2.marketProgramId,
        serumMarket: keys2.marketId,
        serumBids: keys2.marketBids,
        serumAsks: keys2.marketAsks,
        serumEventQueue: keys2.marketEventQueue,
        serumCoinVaultAccount: keys2.marketBaseVault,
        serumPcVaultAccount: keys2.marketQuoteVault,
        serumVaultSigner: keys2.marketAuthority,
        uerSourceTokenAccount: tokenAccountInput,
        uerDestinationTokenAccount: tokenAccountOutput,
        userSourceOwner: wallet.publicKey
    }).signers([wallet]).rpc({
        skipPreflight: true
    })

    console.log(tx)
}

async function createAccoutns() {
    console.log("oi")

   
    const tokenAccountInput = await spl.getOrCreateAssociatedTokenAccount(connection, wallet, keys.inputVaultMint, wallet.publicKey );

    const tokenAccountOutput = await spl.getOrCreateAssociatedTokenAccount(connection,wallet, keys.outputVaultMint, wallet.publicKey );

    console.log(tokenAccountInput.address)
     console.log(tokenAccountOutput.address)
 }



swap()


