/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />

import * as TruffleContracts from ".";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "ConvertLib"): TruffleContracts.ConvertLibContract;
      require(
        name: "FlashLoanReceiverBase"
      ): TruffleContracts.FlashLoanReceiverBaseContract;
      require(
        name: "ILendingPoolAddressesProvider"
      ): TruffleContracts.ILendingPoolAddressesProviderContract;
      require(name: "LendingPool"): TruffleContracts.LendingPoolContract;
      require(name: "Liquidator"): TruffleContracts.LiquidatorContract;
      require(name: "MetaCoin"): TruffleContracts.MetaCoinContract;
      require(name: "Migrations"): TruffleContracts.MigrationsContract;
      require(
        name: "OptionsContract"
      ): TruffleContracts.OptionsContractContract;
      require(
        name: "OptionsExchange"
      ): TruffleContracts.OptionsExchangeContract;
    }
  }
}
