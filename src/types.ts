export type Flower = {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
};

export interface FlowerInitialState {
  flowers: Flower[];
  loading: boolean;
  error: string;
}
