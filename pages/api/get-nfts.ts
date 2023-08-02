import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { nftCollectionAddress } from "../../data/address";
import { nfts } from "../../data/nfts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
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

    try {
      const mintedNfts = await nftCollection?.erc721.getAll();

      if (!mintedNfts) {
        return res.status(200).json(nfts);
      }

      mintedNfts.forEach((nft) => {
        const nftIndex = nfts.findIndex(
          // @ts-ignore
          (nftItem) => nftItem.id === nft.metadata.attributes[0].id
        );
        if (nftIndex !== -1) {
          nfts[nftIndex].minted = true;
        }
      });

      return res.status(200).json(nfts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
