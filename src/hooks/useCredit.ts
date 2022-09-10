import type { FormatCreditAmountOptions } from "./@types";

export function useCredit() {
  function formatCreditAmount(
    amount?: number,
    options?: FormatCreditAmountOptions,
  ) {
    return Intl.NumberFormat("de-US", {
      signDisplay: options?.sign ? "always" : "never",
    }).format(amount || 0);
  }
  return { formatCreditAmount };
}
