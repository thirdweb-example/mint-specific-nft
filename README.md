# Mint Specific NFT

This project demonstrates how you can allow users to mint specific NFTs from a collection using signature mint.

## Tools:

- [React SDK](https://docs.thirdweb.com/react): To access the connected wallet, switch the user's network, and claim an NFT from our Edition Drop collection.

## Using This Template

Create a project using this example:

```bash
npx thirdweb create --template mint-specific-nfts
```

- Create an [NFT Collection](https://thirdweb.com/thirdweb.eth/ERC721) contract using the dashboard.
- Update the contract address in [data/address.ts](./data/address.ts) with the address of your collection.
- Update the NFTs in [data/nfts.ts](./data/nfts.ts) with the NFTs you want to mint.
- Create an environment variable in a `.env.local` file with your private key, in the form `PRIVATE_KEY=xxx`, similarly to the `.env.example` file provided.

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
