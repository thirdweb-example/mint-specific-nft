import {
  MediaRenderer,
  useAddress,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { nftCollectionAddress } from "../data/address";
import styles from "../styles/Home.module.css";
import { NFT } from "../types/NFT";

const Nft = ({ nft }: { nft: NFT }) => {
  const { data: nftCollection } = useContract(
    nftCollectionAddress,
    "nft-collection"
  );
  const address = useAddress();
  const [loading, setLoading] = useState(false);

  const mintNft = async (id: number) => {
    setLoading(true);

    try {
      const response = await fetch("/api/generate-signature", {
        method: "POST",
        body: JSON.stringify({ id, address }),
      });

      if (response) {
        const data = await response.json();

        await nftCollection?.signature.mint(data.signature);
        alert("NFT successfully minted!");
      }
    } catch (error) {
      alert("Failed to mint NFT!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.NFT}>
      {nft?.url && (
        <MediaRenderer
          src={nft.url.replace("ipfs://", "https://ipfs.thirdwebcdn.com/ipfs/")}
          className={styles.NFTImage}
        />
      )}

      <div className={styles.textContainer}>
        <h2>{nft?.name}</h2>
        <p>{nft?.description}</p>
        <p>{nft?.price} ETH</p>
      </div>

      {loading ? (
        <p
          style={{
            textAlign: "center",
          }}
        >
          Minting...
        </p>
      ) : nft?.minted ? (
        <b>This NFT has already been minted</b>
      ) : (
        <Web3Button
          action={() => mintNft(nft?.id)}
          contractAddress={nftCollectionAddress}
        >
          Mint
        </Web3Button>
      )}
    </div>
  );
};

export default Nft;
