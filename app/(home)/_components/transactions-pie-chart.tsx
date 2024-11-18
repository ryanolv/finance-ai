"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionsPercentagePerType } from "@/app/_data-layer/get-dashboard/types";
import PercentageItem from "./percentage-item";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const chartConfig = {
  [TransactionType.DEPOSIT]: {
    label: "Receitas",
    color: "#55B02E",
  },
  [TransactionType.INVESTMENT]: {
    label: "Investimentos",
    color: "#FFC107",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#F44336",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  depositsTotal: number;
  expensesTotal: number;
  investmentsTotal: number;
  typesPercentage: TransactionsPercentagePerType;
}

export function TransactionsPieChart({
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  typesPercentage,
}: TransactionsPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFC107",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#F44336",
    },
  ];

  return (
    <Card className="col-span-3 flex flex-col rounded-2xl p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={75}
              // strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receitas"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-destructive" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimentos"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
