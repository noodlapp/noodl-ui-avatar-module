import * as Noodl from "@noodl/noodl-sdk";

function GetNameAbbreviation(name: string): string | undefined {
  function _split(): string[] {
    const bySpace = name.split(" ");
    const byDot = name.split(".");
    return bySpace.length > byDot.length ? bySpace : byDot;
  }

  function _makeBadge(first: string, second: string) {
    if (first === undefined) return undefined;
    else if (second === undefined) return (first + first).toUpperCase();
    else return (first + second).toUpperCase();
  }

  let badge = undefined;
  try {
    const chars = _split();
    if (chars.length === 1) {
      badge = _makeBadge(chars[0][0], chars[0][1]);
    } else if (chars.length >= 2) {
      badge = _makeBadge(chars[0][0], chars[1][0]);
    }
  } catch (e) {}

  return badge;
}

// export const nameAbbreviationNode = Noodl.Node.create({
