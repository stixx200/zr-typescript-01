type CityLiteral = "city";

type getLiteral<T extends string> = `get${T}`;
type GetCity = getLiteral<CityLiteral>; // type "getcity"
