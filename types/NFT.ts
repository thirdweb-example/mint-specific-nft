export interface NFT {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;
  minted?: boolean;
}
