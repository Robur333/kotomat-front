export interface CatProperties {
  breeds: [
    {
      adaptability: number;
      affection_level: number;
      child_friendly: number;
      dog_friendly: number;
      energy_level: number;
      description: string;
      wikipedia_url: string;
      name: string;
    }
  ];
  id: string;
  url: string;
}
