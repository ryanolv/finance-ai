"use client";

import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between border-b-2 border-solid border-b-muted px-8 py-4">
      <nav className="flex items-center justify-between space-x-12">
        <Link href="/">
          <Image
            src="/logo.svg"
            height={39}
            width={183.57}
            alt="Logo Finance.ai"
          />
        </Link>
        <Link
          href="/"
          className={
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </nav>

      <div className="rounded-lg border-2 border-solid border-muted p-2">
        <UserButton showName />
      </div>
    </div>
  );
};

export default Header;
