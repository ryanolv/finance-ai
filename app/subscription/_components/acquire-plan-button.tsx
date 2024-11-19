"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBISHABLE_KEY)
      throw new Error("Stripe publishable key not found");
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBISHABLE_KEY,
    );
    if (!stripe) throw new Error("Stripe not found");
    await stripe.redirectToCheckout({ sessionId });
  };
  return (
    <Button className="w-full rounded-full" onClick={handleAcquirePlanClick}>
      Adquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
