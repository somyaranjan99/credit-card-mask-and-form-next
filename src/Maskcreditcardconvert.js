export const maskCreditcard = (card) => {
  if (typeof card !== "number" && typeof card !== "string") {
    return "Invalid card";
  }
  let cc = String(card);
  let cc_length = cc.length;
  if (cc_length < 6) {
    return cc;
  }
  let first_letter = cc.slice(0, 1);
  let lastFour = cc.slice(-4);
  //   let mask_letter = cc.slice(1, cc_length - 4).replace(/\d/g, "#");
  let mask_letter = "";
  for (let i = 1; i < cc_length - 4; i++) {
    mask_letter += isNaN(parseInt(cc[i], 10)) ? cc[i] : "#";
  }
  return `${first_letter}${mask_letter}${lastFour}`;
};
