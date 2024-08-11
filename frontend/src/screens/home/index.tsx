import { Filters, Header, InputGroup, Main, Section } from "./home-styles";
import { Logo } from '../../components/logo/index'
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { InputMask } from "@react-input/mask";
import { ButtonIcon } from "../../components/button-icon";

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
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                variant="dark"
                                label="Início" 
                                placeholder="dd/mm/yyyy"                               
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                variant="dark"
                                label="Fim"   
                                placeholder="dd/mm/yyyy"                             
                            />
                            <ButtonIcon/>
                        </InputGroup>
                    </Filters>
                </Section>
            </Main>
        </>
    )
}