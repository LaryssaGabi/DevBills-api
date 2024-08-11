import { Filters, Header, Main, Section } from "./home-styles";
import { Logo } from '../../components/logo/index'
import { Button } from "../../components/button";
import { Title } from "../../components/title";

export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Button>Nova transação</Button>
                    <Button>Nova categoria</Button>
                </div>
            </Header>
            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no período" />
                    </Filters>
                </Section>
            </Main>
        </>
    )
}