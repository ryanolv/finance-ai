import { Badge } from "@/app/_components/ui/badge";
import { TYPE_TRANSACTIONS } from "@/app/_constants/transactions";
import { TransactionType } from "@prisma/client";
import { Circle } from "lucide-react";

interface SelectBadgeProps {
  typeTransaction: TransactionType;
}

const SelectBadge = ({ typeTransaction }: SelectBadgeProps) => {
  if (typeTransaction === TransactionType.DEPOSIT) {
    return (
      <Badge className="gap-1.5 bg-primary/15 font-bold text-primary hover:bg-primary/15">
        <Circle size={8} fill="currentColor" />
        {TYPE_TRANSACTIONS[typeTransaction]}
      </Badge>
    );
  }
  if (typeTransaction === TransactionType.EXPENSE) {
    return (
      <Badge className="gap-1.5 bg-destructive/15 font-bold text-destructive hover:bg-destructive/15">
        <Circle size={8} fill="currentColor" />
        {TYPE_TRANSACTIONS[typeTransaction]}
      </Badge>
    );
  }
  if (typeTransaction === TransactionType.INVESTMENT) {
    return (
      <Badge className="gap-1.5 bg-accent/50 font-bold hover:bg-accent/50">
        <Circle size={8} fill="currentColor" />
        {TYPE_TRANSACTIONS[typeTransaction]}
      </Badge>
    );
  }
};

export default SelectBadge;
