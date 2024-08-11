import { ArrowCircleDownRight, ArrowCircleUpRight, CurrencyCircleDollar } from "@phosphor-icons/react";
import { Container } from "./card-styles";
import { formatCurrency } from "../../utils/format-currency";

type CardProps = {
    variant?: 'balance' | 'incomes' | 'expenses';
    title: string;
    amount: number;
}

const incosMap = {
    'balance': <CurrencyCircleDollar />,
    'incomes': <ArrowCircleUpRight />,
    'expenses': <ArrowCircleDownRight />
}

export function Card({ variant = 'balance', title, amount }: CardProps) {
    return (
        <Container $variant={variant}>
            {incosMap[variant]}
            <span>{title}</span>
            <strong>{formatCurrency(amount)}</strong>
        </Container>
    )
}