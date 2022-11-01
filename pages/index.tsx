import styled from "@emotion/styled";
import {useState} from "react";
import Link from "next/link";
import {HeaderComponent} from "../components/header";
import {NextPage} from "next";

export const Wrapper = styled.div`
  background-image: url('back/main-back.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-width: 1200px;
  height: 100vh;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 400;
  font-family: Calibri, sans-serif;

  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin: 12px auto 0;
    padding: 0;
    font-size: 32px;
    font-weight: 700;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 20px;
    cursor: ew-resize;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFD748;
    border-radius: 8px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 20px;
      //background: #FFD748;
      background-color: #104987;
      border: none;
    }

    &::-moz-range-thumb {
      background: var(--color-green);
      border: none;
    }
  }
`

const MenuBorder = styled.div`
  width: 700px;
  height: 660px;
  background: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuBox = styled.div`
  width: 660px;
  height: 620px;
  position: relative;
  background: white;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
`
const FlexRangeValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;

  p {
    width: 30px;
    text-align: center;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto 40px;
`

const YellowBtn = styled.div`
  padding: 8px 16px;
  background: #FFD748;
  border-radius: 20px;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
  }
`

const PlayBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #38DF7A;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 60px;
  width: 280px;
  color: white;
  margin: 0 auto;
  cursor: pointer;

  a {
    color: white;
  }
`

interface pI {
    random: number,
}

const MainMenu: NextPage<pI> = ({random}) => {

    let [amount, setAmount] = useState<number>(1)
    let [values, setValues] = useState<number>(1)
    let [type, setType] = useState<number>(0)

    return (
        <>
            <HeaderComponent />
            <Wrapper>
                <MenuBorder>
                    <MenuBox>
                        <h2>Кол-во предметов</h2>
                        <FlexRangeValues>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </FlexRangeValues>
                        <input style={{width: '80%', margin: '0 auto 24px'}}
                               type="range"
                               step={1}
                               min={1}
                               max={4}
                               value={amount}
                               onChange={(e) => {
                                   setAmount(Number(e.currentTarget.value))
                               }}
                        />
                        <h2>Значения</h2>
                        <FlexRangeValues>
                            <p>A</p>
                            <p>9</p>
                            <p>19</p>
                            <p>50</p>
                            <p>99</p>
                            <p>999</p>
                        </FlexRangeValues>
                        <input style={{width: '80%', margin: '0 auto 24px'}}
                               type="range"
                               step={1}
                               min={1}
                               max={6}
                               value={values}
                               onChange={(e) => {
                                   setValues(Number(e.currentTarget.value))
                               }}
                        />
                        <BtnWrapper>
                            <YellowBtn className={(type === 0) ? '' : 'disabled'}
                                       onClick={() => {
                                           setType(0)
                                       }}
                            >
                                По возрастанию
                            </YellowBtn>
                            <YellowBtn className={(type === 0) ? 'disabled' : ''}
                                       onClick={() => {
                                           setType(1)
                                       }}
                            >
                                По убыванию
                            </YellowBtn>
                        </BtnWrapper>
                        <PlayBtn>
                            <Link href={`./game?type=${type}&amount=${amount}&values=${values}&random=${random}`}>
                                Играть
                            </Link>
                        </PlayBtn>
                    </MenuBox>
                </MenuBorder>
            </Wrapper>
        </>
    )
}

MainMenu.getInitialProps = () => {
    const random = Math.floor(Math.random() * 4 + 1)

    return {random}
}

export default MainMenu