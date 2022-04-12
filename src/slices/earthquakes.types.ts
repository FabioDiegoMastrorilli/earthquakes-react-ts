export type EarthquakePropsType = {
  mag: number;
  place: string;
  time: number;
  updated: number;
  url: string;
  detail: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: "earthquake";
  title: string;
};

export type EarthquakeType = {
  type: string;
  properties: EarthquakePropsType;
  geometry: {
    type: string;
    coordinates: [number, number, number];
  };
  id: string;
};

export type EarthquakePropsKeysType = keyof EarthquakePropsType;

export type KeyOfType<Type, Value> = {
  [Key in keyof Type]: Type[Key] extends Value ? Key : never;
}[keyof Type];

export type MultiRangeFilterValueLimitType = {
  absolute: number;
  percentage: number;
};

export type MultiRangeFilterValueType =
  | [MultiRangeFilterValueLimitType, MultiRangeFilterValueLimitType]
  | null;

export type MultiRangeFilterType = {
  type: "multiRange";
  matchKey: KeyOfType<EarthquakePropsType, number>;
  value?: MultiRangeFilterValueType;
};

export type SelectFilterType = {
  type: "select";
  matchKey: KeyOfType<EarthquakePropsType, string>;
  value?: string | null;
};

export type FilterType = SelectFilterType | MultiRangeFilterType;

export interface EarthquakesStateType {
  earthquakes: EarthquakeType[] | null;
  status: "idle" | "loading" | "failed";
  filters: FilterType[];
}
