export interface movieTypes {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface movieResponse {
  Search?: movieTypes[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}
