import styled from 'styled-components';

//glassmorphism 공통 css (height를 주면 그걸로 설정되고 아니면 기본 500px)
function GlassmorphismModal(props) {
    const { height = '500px', margin = '0px', children } = props;

    return (
        <Box height={height} margin={margin}>
            {children}
        </Box>
    );
}
export default GlassmorphismModal;

const Box = styled.div`
    width: 80%;
    min-height: ${({ height }) => height};
    /* From https://css.glass */
    /* From https://css.glass */
    background: rgba(149, 142, 173, 0.42);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
    border: 1px solid rgba(149, 142, 173, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ margin }) => margin};
`;
