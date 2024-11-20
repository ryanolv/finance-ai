"use client";

import { Button } from "@/app/_components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="rounded-full"
                disabled={!userCanAddTransaction}
              >
                Adicionar Transação
                <ArrowDownUp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {userCanAddTransaction &&
                "Você atingiu o limite de transações. Atualize seu plano para adicionar mais transações."}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <UpsertDialogContent setDialogIsOpen={setDialogIsOpen} />
    </Dialog>
  );
};

export default AddTransactionButton;
