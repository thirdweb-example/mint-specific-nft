import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { nftCollectionAddress } from "../../data/address";
import { nfts } from "../../data/nfts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, address } = JSON.parse(req.body);

  try {
    const sdk = ThirdwebSDK.fromPrivateKey(
      process.env.WALLET_PRIVATE_KEY!,
      "goerli",
      {
        secretKey: process.env.TW_SECRET_KEY,
      }
    );

    const nftCollection = await sdk.getContract(
      nftCollectionAddress,
      "nft-collection"
    );

    const mintedNfts = await nftCollection?.erc721.getAll();

    if (mintedNfts) {
      const mintedNft = mintedNfts.find(
        // @ts-ignore
        (nft) => nft.metadata.attributes[0].id === id
      );

      if (mintedNft) {
        return res.status(400).json({ error: "NFT already minted" });
      }
    }

    const { name, description, url, price } = nfts[id];

    const metadata = {
      metadata: {
        name,
        description,
        image: url,
        attributes: [{ id }],
      },
      price,
      to: address,
    };

    const signature = await nftCollection?.signature.generate(metadata);

    return res.status(200).json({ signature });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
