import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { CATEGORY_TRANSACTIONS_LABELS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data-layer/get-dashboard/types";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-5 h-full rounded-2xl border p-6">
      <CardHeader className="border-b">
        <CardTitle className="text-lg font-bold">
          Despesas por categoria
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 py-4">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="flex items-center justify-between font-semibold">
              <p>{CATEGORY_TRANSACTIONS_LABELS[category.category]}</p>
              <p>{category.percentageOfTotal}%</p>
            </div>
            <Progress value={category.percentageOfTotal} max={100} />
            <p className="text-sm font-semibold text-muted-foreground">
              R$ {category.totalAmount}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;
