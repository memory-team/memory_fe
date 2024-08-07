import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import GlassmorphismModal from '../../components/glassmorphismModal/glassmorphismModal';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePostLogIn } from '../../query/Post/usePostLogIn';
import TokenService from '../../utils/tokenService';
import Cloud1 from '../../assets/Img/LogInImg/Cloud1.png';
import Cloud2 from '../../assets/Img/LogInImg/Cloud2.png';
import Logo from '../../assets/Img/logo.png';
import customToast from '../../components/toast/toast';

// import TokenService from '../../utils/tokenService';

function LogInPage() {
    const navigate = useNavigate();

    const [idAndPw, setIdAndPw] = useState({
        userId: '',
        userPw: '',
    });
    const { mutate } = usePostLogIn('/');

    const handleLogIn = () => {
        mutate(idAndPw);
    };
    const activeEnter = (e) => {
        if (e.key === 'Enter') {
            if (
                idAndPw.userId.trim().length === 0 ||
                idAndPw.userPw.trim().length === 0
            )
                return customToast(
                    '아이디와 비밀번호를 입력해주세요.',
                    'error',
                );

            mutate(idAndPw);
        }
    };

    useEffect(() => {
        if (!TokenService.getAccessToken()) return navigate('/login');
    }, []);

    return (
        <BackImg>
            <Box>
                <GlassmorphismModal>
                    <Cloud1Img src={Cloud1} alt="" />
                    <Cloud2Img src={Cloud2} alt="" />

                    <TopBox>
                        <LogoBox>
                            <img src={Logo} alt="" />
                        </LogoBox>
                    </TopBox>
                    <MiddleBox>
                        <LogInInput
                            type="text"
                            name="id"
                            placeholder="아이디를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    ...prev,
                                    userId: e.target.value,
                                }))
                            }
                        />
                        <LogInInput
                            type="password"
                            name="pw"
                            placeholder="비밀번호를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    ...prev,
                                    userPw: e.target.value,
                                }))
                            }
                            onKeyDown={(e) => activeEnter(e)}
                        />
                    </MiddleBox>
                    <BottomBox>
                        <LogInBt
                            type="Button"
                            disabled={
                                idAndPw.userId.trim() === '' ||
                                idAndPw.userPw.trim() === ''
                            }
                            onClick={handleLogIn}
                        >
                            로그인
                        </LogInBt>
                        <LogInBt
                            type="Button"
                            onClick={() => navigate('/signUp')}
                        >
                            가입하러 가기
                        </LogInBt>
                    </BottomBox>
                </GlassmorphismModal>
            </Box>
        </BackImg>
    );
}
export default LogInPage;

const BackImg = styled.div`
    ${BackGroundImg()}
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
    overflow: hidden;
`;

const Box = styled.form`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;
const Cloud1Img = styled.img`
    position: absolute;
    top: -100px;
    left: -10px;
    z-index: -1;
`;
const Cloud2Img = styled.img`
    position: absolute;
    bottom: -110px;
    right: 0px;
    z-index: -1;
`;
const TopBox = styled.div`
    width: 75%;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoBox = styled.div`
    font-size: 24px;
    color: white;
    font-weight: bold;
    line-height: 150%;
    text-align: center;
    & > img {
        width: 80%;
    }
`;
const MiddleBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BottomBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const LogInInput = styled.input`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    background-color: #6a6b9d;
    font-size: 16px;
    margin-bottom: 20px;
    color: white;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
    }
`;
const LogInBt = styled.button`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #65628b;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 24px;
    padding-top: 3px;
    cursor: pointer;
    font-weight: bold;
    &:disabled {
        opacity: 0.9;
    }
`;
