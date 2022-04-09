import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Flower = {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
};

interface initialState {
  flowers: Flower[];
}

const initialState = {
  flowers: [],
};
