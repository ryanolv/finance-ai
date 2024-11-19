import { CheckIcon, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/card";
import { Button } from "../_components/ui/button";

const SubscriptionPage = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Assinatura</h1>
      <div className="flex gap-6">
        <Card className="w-[450px]">
          <CardHeader className="border-b border-solid py-8">
            <h2 className="text-center text-2xl font-semibold">Plano Básico</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-6xl font-semibold">0</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-10">
            <p className="flex items-center gap-1">
              <CheckIcon color="green" size={24} /> Apenas 10 transações por dia
              (7/10)
            </p>
            <p className="flex items-center gap-1">
              <X size={24} color="red" /> Relatórios de IA ilimitados
            </p>
          </CardContent>
        </Card>
        <Card className="w-[450px]">
          <CardHeader className="border-b border-solid py-8">
            <h2 className="text-center text-2xl font-semibold">Plano Pro</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-6xl font-semibold">19</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-10">
            <p className="flex items-center gap-1">
              <CheckIcon color="green" size={24} /> Transações ilimitadas
            </p>
            <p className="flex items-center gap-1">
              <CheckIcon size={24} color="green" /> Relatórios de IA ilimitados
            </p>
          </CardContent>
          <CardFooter className="p-10">
            <Button className="w-full rounded-full">Adquirir plano</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPage;
