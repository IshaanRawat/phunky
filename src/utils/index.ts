const reverseString = (str: string) => str.split("").reverse().join("");

const formatToDecimals = (numberString: string, decimals: number) => {
  let reversedNumberString = reverseString(numberString);
  if (reversedNumberString.length < decimals + 1) {
    reversedNumberString = reversedNumberString.padEnd(decimals + 1, "0");
  }
  reversedNumberString =
    reversedNumberString.slice(0, decimals) +
    "." +
    reversedNumberString.slice(decimals);
  return reverseString(reversedNumberString);
};

const formatTokenId = (tokenId: string) => tokenId.padStart(4, "0");

const formatAddress = (address: string) =>
  `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;

export { formatToDecimals, formatTokenId, formatAddress };
