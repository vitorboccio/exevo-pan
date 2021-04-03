import styled from 'styled-components';

export default styled.header`
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    background-color: var(--primary);

    &::after {
        content: '';
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1;
        height: 60px;
        width: 32px;
        background-image: linear-gradient(to left, var(--primary), rgba(0,0,0,0));
        pointer-events: none;
    }

    nav ul {
        display: flex;
    }
`;

export const HeaderItem = styled.li`
    &:not(:last-child) {
        margin-right: 8px;
    }

    a {
        padding: 8px 16px;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: var(--onPrimary);
        white-space: nowrap;
    }
`

export const Logo = styled.img`
    margin-right: 18px;
`;