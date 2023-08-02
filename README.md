# Mint Specific NFT

This project demonstrates how you can allow users to mint specific NFTs from a collection using signature mint.

## Installation

Install the template with [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
npx thirdweb create --template mint-specific-nft
```

## Set up

- Create an [NFT Collection](https://thirdweb.com/thirdweb.eth/ERC721) contract using the dashboard.
- Update the contract address in [data/address.ts](./data/address.ts) with the address of your collection.
- Update the NFTs in [data/nfts.ts](./data/nfts.ts) with the NFTs you want to mint.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```bash
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=paste-your-client-id-here
WALLET_PRIVATE_KEY=paste-your-wallet-private-key-here
TW_SECRET_KEY=paste-your-secret-key-here
```

- Generate your `TW_SECRET_KEY` and `NEXT_PUBLIC_TEMPLATE_CLIENT_ID` via thirdweb's [dashboard](https://thirdweb.com/create-api-key).
- For `THIRDWEB_AUTH_PRIVATE_KEY` export your wallet private key from your wallet.

### Run Locally

Install dependencies:

```bash
  yarn
```

Start the server:

```bash
  yarn start
```

## Additional Resources

- [Documentation](https://portal.thirdweb.com)
- [Templates](https://thirdweb.com/templates)
- [Video Tutorials](https://youtube.com/thirdweb_)
- [Blog](https://blog.thirdweb.com)

## Contributing

Contributions and [feedback](https://feedback.thirdweb.com) are always welcome!

Please visit our [open source page](https://thirdweb.com/open-source) for more information.

## Need help?

For help, join the [discord](https://discord.gg/thirdweb) or visit our [support page](https://support.thirdweb.com).
