"use client";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { cn } from "@/app/_lib/utils";
import {
  CATEGORIES_VALUES_FORM,
  CATEGORY_TRANSACTIONS,
  PAYMENT_METHODS,
  PAYMENTS_METHODS_VALUES_FORM,
  TYPE_TRANSACTIONS,
  TYPE_TRANSACTIONS_VALUES_FORM,
} from "@/app/_constants/transactions";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  amount: z.coerce.number().min(0),
  type: z.enum([
    TYPE_TRANSACTIONS.DEPOSIT,
    TYPE_TRANSACTIONS.EXPENSE,
    TYPE_TRANSACTIONS.INVESTMENT,
  ]),
  category: z.enum([
    CATEGORY_TRANSACTIONS.HOUSING,
    CATEGORY_TRANSACTIONS.TRANSPORTATION,
    CATEGORY_TRANSACTIONS.FOOD,
    CATEGORY_TRANSACTIONS.ENTERTAINMENT,
    CATEGORY_TRANSACTIONS.HEALTH,
    CATEGORY_TRANSACTIONS.UTILITY,
    CATEGORY_TRANSACTIONS.SALARY,
    CATEGORY_TRANSACTIONS.EDUCATION,
    CATEGORY_TRANSACTIONS.OTHER,
  ]),
  paymentMethod: z.enum([
    PAYMENT_METHODS.CREDIT_CARD,
    PAYMENT_METHODS.DEBIT_CARD,
    PAYMENT_METHODS.BANK_TRANSFER,
    PAYMENT_METHODS.BANK_SLIP,
    PAYMENT_METHODS.CASH,
    PAYMENT_METHODS.PIX,
    PAYMENT_METHODS.OTHER,
  ]),
  date: z.date(),
});

const AddDialogContent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      type: TYPE_TRANSACTIONS.EXPENSE,
      category: CATEGORY_TRANSACTIONS.HOUSING,
      paymentMethod: PAYMENT_METHODS.CREDIT_CARD,
      date: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <DialogContent>
      <DialogHeader className="flex flex-col items-center">
        <DialogTitle>Adicionar Transação</DialogTitle>
        <DialogDescription>Insira as informações abaixo</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da transação" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome da transação"
                    {...field}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de transação</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de transação" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TYPE_TRANSACTIONS_VALUES_FORM.map((item) => (
                      <SelectItem key={item.value} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Método de pagamento</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o método de pagamento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PAYMENTS_METHODS_VALUES_FORM.map((item) => (
                      <SelectItem key={item.value} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria da transação" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES_VALUES_FORM.map((item) => (
                      <SelectItem key={item.value} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          new Intl.DateTimeFormat("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }).format(new Date(field.value))
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button
                type="button"
                className="w-full rounded-xl"
                variant="outline"
                onClick={() => form.reset()}
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full rounded-xl">
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AddDialogContent;
