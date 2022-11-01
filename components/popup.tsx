import styled from "@emotion/styled";
import Link from "next/link";

export const Popup = () => {

    const PopupWrapper = styled.div`
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Calibri, sans-serif;
    `
    const PopupBorder = styled.div`
      width: 660px;
      height: 520px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(384.16% 384.16% at 50% 50%, #8D67DF 12.29%, #67DF89 21.15%);
      border-radius: 32px;
    `
    const Popup = styled.div`
      width: 620px;
      height: 480px;
      background: white;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      a {
        text-decoration: none;
      }

      b {
        font-size: 128px;
        margin: 0;
        color: #FFE44F;
        text-shadow: 2px 3px 30px #3F9357;
        font-weight: 700;
      }

      p {
        color: #5F40A1;
        font-size: 40px;
        width: 80%;
        margin: 32px auto 64px;
        text-align: center;
      }
    `
    const ButtonRepeat = styled.div`
      width: 260px;
      height: 70px;
      background: #2BD600;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 700;
    `
    const Star = styled.div`
      background-image: url('stars/star-1.png');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      &#star-1 {
        top: -40px;
        left: -88px;
        width: 160px;
        height: 160px;
      }
      &#star-2 {
        bottom: -100px;
        left: -160px;
        width: 240px;
        height: 240px;
      }
      &#star-3 {
        bottom: 160px;
        left: 560px;
        width: 200px;
        height: 200px;
      }
      &#star-4 {
        bottom: -60px;
        left: 540px;
        width: 120px;
        height: 120px;
      }
    `

    return (
        <>
            <PopupWrapper>
                <PopupBorder>
                    <Popup>
                        <b>Победа!</b>
                        <p>Молодец! Ты успешно справился с заданием!</p>
                        <Link href={"/"}>
                            <ButtonRepeat>
                                Заново
                            </ButtonRepeat>
                        </Link>
                        <Star id={"star-1"}></Star>
                        <Star id={"star-2"}></Star>
                        <Star id={"star-3"}></Star>
                        <Star id={"star-4"}></Star>
                    </Popup>
                </PopupBorder>
            </PopupWrapper>
        </>
    )
}