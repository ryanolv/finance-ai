"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog } from "@/app/_components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Pencil } from "lucide-react";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pencil />
        </Button>
      </DialogTrigger>
      <UpsertDialogContent
        setDialogIsOpen={setDialogIsOpen}
        currentData={transaction}
        transactionId={transaction.id}
      />
    </Dialog>
  );
};

export default EditTransactionButton;
