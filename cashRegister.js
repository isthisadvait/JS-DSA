const curUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};
function checkCashRegister(price, cash, cid) {
  let chngSum = cash * 100 - price * 100;
  let chngSumCheck = chngSum;
  let change = [];
  let status = "";
  let cidSum = 0;
  let filteredCid = cid.filter((ele) => ele[1] !== 0).reverse();
  filteredCid.forEach((ele) => {
    let curr = ele[0];
    let currSum = ele[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (chngSum >= curUnit[curr] && currSum > 0) {
      amount += curUnit[curr];
      chngSum -= curUnit[curr];
      currSum -= curUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });
  if (chngSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (chngSum == 0 && chngSumCheck == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
