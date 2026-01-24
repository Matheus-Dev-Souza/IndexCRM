import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Se você usar Tailwind, isso ajuda a combinar classes. Se não, pode remover esta função.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR");
}