import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle } from "@/app/_components/ui/card";

const TransactionHistory = () => {
  return (
    <Card className="col-span-4 h-full rounded-2xl p-6">
      <CardHeader>
        <div className="flex items-center justify-between border-b-2 border-solid border-b-muted p-0 pb-6">
          <CardTitle className="text-xl">Transações</CardTitle>
          <Button variant="outline" className="rounded-2xl">
            Ver mais
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TransactionHistory;
