export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth?: Date;
};

export type UserInitialState = {
  authToken: string;
  loading: boolean;
  error: string | undefined;
};

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
