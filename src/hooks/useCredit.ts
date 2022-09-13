import type { FormatCreditAmountOptions } from "./@types";

export function useCredit() {
  function formatCreditAmount(
    amount?: number,
    options?: FormatCreditAmountOptions,
  ) {
    return Intl.NumberFormat("en-US", {
      signDisplay: options?.sign ? "always" : "never",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(amount || 0);
  }
  return { formatCreditAmount };
}
