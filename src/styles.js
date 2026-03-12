import styled from 'styled-components';

export const PlayList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 480px;
    overflow-y: auto;
    flex: 1;
`;

export const Song = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    cursor: pointer;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
        background-color: #f5f5f5;
    }

    p {
        margin: 0;
        color: #666;
        font-size: 0.875rem;
    }
`;

export const SongTitle = styled.span`
    font-weight: ${({ active }) => (active ? '700' : '400')};
    color: ${({ active }) => (active ? '#1db954' : '#212121')};
    font-size: 1rem;
`;

export const BottomBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    padding: 12px 16px;
    background-color: #212121;
    color: #fff;
    box-sizing: border-box;
`;

export const BarSongTitle = styled.span`
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40%;
`;

export const Button = styled.button`
    background: none;
    border: 1px solid #fff;
    color: #fff;
    padding: 6px 12px;
    margin-left: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
        background-color: #fff;
        color: #212121;
    }
`;
