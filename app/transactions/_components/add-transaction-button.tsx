import { Button } from "@/app/_components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import AddDialogContent from "./add-dialog-content";

const AddTransactionButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUp />
        </Button>
      </DialogTrigger>
      <AddDialogContent />
    </Dialog>
  );
};

export default AddTransactionButton;
