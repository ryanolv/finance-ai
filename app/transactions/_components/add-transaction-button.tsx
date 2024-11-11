"use client";

import { Button } from "@/app/_components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUp />
        </Button>
      </DialogTrigger>
      <UpsertDialogContent setDialogIsOpen={setDialogIsOpen} />
    </Dialog>
  );
};

export default AddTransactionButton;
