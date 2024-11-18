import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Transaction } from "@prisma/client";
import Link from "next/link";
import TransactionItem from "./transaction-item";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  return (
    <ScrollArea className="col-span-4 row-span-2 h-full rounded-2xl border p-4">
      <CardHeader className="flex-row items-center justify-between border-b border-solid border-b-muted p-6">
        <CardTitle className="text-xl">Últimas Transações</CardTitle>
        <Button variant="outline" className="rounded-2xl" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6 py-6">
        {lastTransactions?.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
