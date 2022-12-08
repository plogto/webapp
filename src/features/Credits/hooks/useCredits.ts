import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import {
  GetCreditTransactionsQuery,
  GetCreditTransactionsQueryRequest,
} from "@graphql/@types/creditTransaction";
import { GET_CREDIT_TRANSACTIONS } from "@graphql/creditTransaction";
import type { Placeholder } from "@t/placeholder";

export function useCredits() {
  const { user, isUserLoading } = useAccountContext();
  const { t } = useTranslation(["common", "credits"]);

  const [getCreditTransactions, getCreditTransactionsResponse] = useLazyQuery<
    GetCreditTransactionsQuery,
    GetCreditTransactionsQueryRequest
  >(GET_CREDIT_TRANSACTIONS);

  useEffect(() => {
    getCreditTransactions();
  }, [getCreditTransactions]);

  const creditTransactions = useMemo(
    () => getCreditTransactionsResponse.data?.getCreditTransactions,
    [getCreditTransactionsResponse.data?.getCreditTransactions],
  );

  const isLoading = useMemo(
    () =>
      isDataLoading(
        getCreditTransactionsResponse.called,
        getCreditTransactionsResponse.loading,
      ),
    [
      getCreditTransactionsResponse.called,
      getCreditTransactionsResponse.loading,
    ],
  );

  const getMoreData = useCallback(() => {
    return getCreditTransactionsResponse.fetchMore({
      variables: {
        after:
          getCreditTransactionsResponse?.data?.getCreditTransactions?.pageInfo
            .endCursor,
      },
    });
  }, [getCreditTransactionsResponse]);

  const emptyStatus: Placeholder = useMemo(
    () => ({
      title: t("credits:status.noTransactions.title"),
      icon: "User",
    }),
    [t],
  );

  return {
    userData: user,
    isUserLoading,
    isLoading,
    creditTransactions,
    getMoreData,
    emptyStatus,
  };
}
