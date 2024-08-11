import styled from "styled-components";

type ContainerProps = {
    $variant: 'black' | 'default'
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap:0.125rem;
    width: 100%;

`