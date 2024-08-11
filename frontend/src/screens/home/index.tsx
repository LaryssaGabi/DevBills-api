import { Aside, Balance, ChartAction, ChartContainer, ChartContent, Filters, Header, InputGroup, Main, SearchTransaction, Section, TransactionGroup } from "./home-styles";
import { Logo } from '../../components/logo/index'
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { InputMask } from "@react-input/mask";
import { ButtonIcon } from "../../components/button-icon";
import { Card } from "../../components/card";
import { Transaction } from "../../components/transaction";
import { Dialog } from "../../components/dialog";

export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Dialog trigger={<Button>Nova transação</Button>}>Olá</Dialog>
                    <Button>Nova categoria</Button>
                </div>
            </Header>

            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no período" />
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>

                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Saldo" amount={1000000} variant="incomes" />
                        <Card title="Saldo" amount={1000000} variant="expenses" />
                    </Balance>

                    <ChartContainer>
                        <header>
                            <Title title="Gastos" subtitle="Despesas por categoria no período" />
                        </header>
                        <ChartContent></ChartContent>
                    </ChartContainer>

                    <ChartContainer>
                        <header>
                            <Title title="Evolução Financeira" subtitle="Saldo, Receitas e Gastos no ano" />

                            <ChartAction>
                                <InputMask
                                    component={Input}
                                    mask="aaaa"
                                    replacement={{ a: /\d/ }}
                                    variant="black"
                                    label="Ano"
                                    placeholder="aaaa"
                                />
                                <ButtonIcon />
                            </ChartAction>
                        </header>

                        <ChartContent></ChartContent>
                    </ChartContainer>

                </Section>

                <Aside>
                    <header>
                        <Title title="Transações" subtitle="Receitas e Gastos no período" />
                        <SearchTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar transações..."
                            />
                            <ButtonIcon />
                        </SearchTransaction>
                    </header>

                        <TransactionGroup>
                            <Transaction id={1} amount={20000} date="10/08/2024" category={{ title: 'Alimentação', color: '#ff33bb' }} title="Mercado" />
                        </TransactionGroup>
                        
                </Aside>

            </Main>
        </>
    )
}