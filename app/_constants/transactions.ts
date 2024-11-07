import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TYPE_TRANSACTIONS = {
  [TransactionType.DEPOSIT]: "Ganho",
  [TransactionType.EXPENSE]: "Gasto",
  [TransactionType.INVESTMENT]: "Investimento",
};

export const CATEGORY_TRANSACTIONS = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.UTILITY]: "Utilidade",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.OTHER]: "Outros",
};

export const PAYMENT_METHODS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto Bancário",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.PIX]: "PIX",
  [TransactionPaymentMethod.OTHER]: "Outro",
};

export const TYPE_TRANSACTIONS_VALUES_FORM = [
  {
    label: "Ganho",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Gasto",
    value: TransactionType.EXPENSE,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTMENT,
  },
];

export const PAYMENTS_METHODS_VALUES_FORM = [
  {
    label: "Cartão de Crédito",
    value: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    label: "Cartão de Débito",
    value: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    label: "Transferência Bancária",
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    label: "Boleto Bancário",
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: "Dinheiro",
    value: TransactionPaymentMethod.CASH,
  },
  {
    label: "PIX",
    value: TransactionPaymentMethod.PIX,
  },
  {
    label: "Outro",
    value: TransactionPaymentMethod.OTHER,
  },
];

export const CATEGORIES_VALUES_FORM = [
  {
    label: "Moradia",
    value: TransactionCategory.HOUSING,
  },
  {
    label: "Transporte",
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: "Alimentação",
    value: TransactionCategory.FOOD,
  },
  {
    label: "Entretenimento",
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: "Saúde",
    value: TransactionCategory.HEALTH,
  },
  {
    label: "Utilidade",
    value: TransactionCategory.UTILITY,
  },
  {
    label: "Salário",
    value: TransactionCategory.SALARY,
  },
  {
    label: "Educação",
    value: TransactionCategory.EDUCATION,
  },
  {
    label: "Outros",
    value: TransactionCategory.OTHER,
  },
];
