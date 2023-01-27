import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { nftCollectionAddress } from "../../data/address";
import { nfts } from "../../data/nfts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY!, "goerli");

  const nftCollection = await sdk.getContract(
    nftCollectionAddress,
    "nft-collection"
  );
  const { id, address } = JSON.parse(req.body);

  const startTime = new Date(0);

  const { name, description, url, price } = nfts[id];

  const metadata = {
    metadata: {
      name,
      description,
      image: url,
      attributes: [{ id }],
    },
    price,
    mintStartTime: startTime,
    to: address,
  };

  try {
    const signature = await nftCollection?.signature.generate(metadata);

    return res.status(200).json({ signature });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
