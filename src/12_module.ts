export function parse(data: string): number {
  return parseInt(data, 10);
}

export const id = "12_module";

const defaultParse = parse;
export default defaultParse;
