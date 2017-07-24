var fs = require('fs');
var csvModel = {
  Account: ['user@caplin.com', ''],
  Amount: ['567', 'jkm', ''],
  CurrencyPair: ['EURUSD', 'YUOXXX', ''],
  DealtCurrency: ['GDP', 'FDE' ,''],
  StrategyType: ['SINGLE', 'OCO', 'IF-DONE-OCO', 'LOOP' ,'IF-DONE-LOOP', 'IF-DONExxx-LOOP', ''],
  ExecutionType: ['TAKE-PROFIT' ,'STOP-LOSS' , 'CALL-ORDER', 'CALL-XXXORDER', ''],
  ActivationType: ['GTA'],
  ActivationDateTime: [''],
  ExpirationType: ['GTA'],
  ExpirationDateTime: [''],
  Margin: ['1.4' ,'qsdf', '']
};

function createCSV () {
  for (var prop in csvModel) {
    console.log(prop);
  }
};

createCSV();
