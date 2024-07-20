import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/meta.png';
import CustomButton from '../../../components/customButton/customButton';

const MetaAbout = () => {
    return (
        <BackImg>
            <AboutMetaCog>
                <AboutMetaWord>
                    <h1>메타인지란?</h1>
                    <MetaWord1>자기인식</MetaWord1>
                    <MetaWord2>자기평가</MetaWord2>
                    <MetaWord3>계획</MetaWord3>
                </AboutMetaWord>
                <DesWrapper>
                    <AboutMetaDes>
                        <span>메타인지</span>는 자기 자신의 사고 과정에 대해{' '}
                        <br />
                        생각하는 능력을 의미합니다. <br />
                        즉, 자신의 생각, 학습, 이해, 기억 등을 <br />
                        인식하고 조절하는 능력입니다.
                    </AboutMetaDes>
                </DesWrapper>
                <BtnWrapper>
                    {/* <MetaButton>질문 대답 하러가기</MetaButton> */}
                    <CustomButton icon={'right'}>다음질문</CustomButton>
                </BtnWrapper>
            </AboutMetaCog>
        </BackImg>
    );
};

export default MetaAbout;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
`;

const AboutMetaCog = styled.div`
    padding-top: 18%;
`;

const AboutMetaWord = styled.div`
    h1 {
        font-size: 32px;
        color: white;
        text-align: center;
    }
`;

const MetaWord1 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 25%;
    padding-left: 15%;
`;

const MetaWord2 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 60%;
`;

const MetaWord3 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 25%;
`;
const DesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
`;
const AboutMetaDes = styled.div`
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: #ffffffc7;
    padding: 15% 0 5% 0;
    span {
        font-size: 16px;
        color: #444b77;
    }
`;
const BtnWrapper = styled.div`
    margin: 0 30px;
    display: flex;
    justify-content: end;
`;
