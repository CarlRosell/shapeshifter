export interface ReferenceBarInterface {
  boolField: boolean;
}

export interface ReferenceSetOnlyStringInterface {
  stringField: string;
}

export interface ReferenceSetInterface {
  boolField: boolean;
  stringField: string;
  numberField: number;
}

export interface ReferenceFooInterface {
  numberField: number;
  refField: ReferenceBarInterface;
}

export interface ReferenceInterface {
  stringField: string;
  refField: ReferenceFooInterface;
  referenceField: ReferenceFooInterface;
  subsetRefField: ReferenceSetOnlyStringInterface;
}
