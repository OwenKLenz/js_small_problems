// Tip Calculator

rlSync = require('readline-sync');

function tipCalc() {
  function acquireBillAndTip() {
    return [rlSync.question("What is the bill "),
            rlSync.question("What is the tip percentage? ")];
  }

  function outputTipAndTotal(billAndTip) {
    let tip = billAndTip[0] * billAndTip[1] / 100;
    let total = tip + Number.parseFloat(billAndTip[0]);

    console.log(`The tip is \$${tip.toFixed(2)}`);
    console.log(`The total is \$${total.toFixed(2)}`);
  }

  outputTipAndTotal(acquireBillAndTip());
}

tipCalc();
