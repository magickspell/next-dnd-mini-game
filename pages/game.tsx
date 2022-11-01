import React from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {HeaderComponent} from "../components/header";
import {useEffect, useMemo, useState} from "react";
import {Popup} from "../components/popup";

interface qI {
    random: number,
    values: number,
    amount: number,
    type: number,
}

export const Game = () => {

    const query: qI = {
        random: Number(useRouter().query.random),
        values: Number(useRouter().query.values),
        amount: Number(useRouter().query.amount),
        type: Number(useRouter().query.type),
    }

    const Wrapper = styled.div`
      background-image: url('back/${query.random}-back.png');
      background-repeat: repeat-x;
      background-size: cover;
      width: 100%;
      min-width: 1200px;
      min-height: 800px;
      font-size: 32px;
      font-weight: 400;
      font-family: Calibri, sans-serif;
      padding-bottom: 200px;
    `
    const DragArea = styled.div`
      position: relative;
      width: 1000px;
      height: 500px;
      margin: 0 auto;
    `

    const DragBox = styled.div`
      position: absolute;
      width: 160px;
      height: 160px;
      background-size: contain;
      background: rgba(0, 0, 0, 0.2) no-repeat;
      border-radius: 200px;

      &#drag-box-4 {
        top: 340px;
        left: 40px;
      }

      &#drag-box-1 {
        top: 250px;
        left: 240px;
      }

      &#drag-box-3 {
        top: 340px;
        left: 440px;
      }

      &#drag-box-2 {
        top: 250px;
        left: 640px;
      }

      &#drag-box-5 {
        top: 340px;
        left: 840px;
      }
    `

    const Item = styled.div`
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &#item-1 {
        background-image: url('items/${query.random}-item-${1}.png');
        top: 340px;
        left: 40px;
      }

      &#item-2 {
        background-image: url('items/${query.random}-item-${2}.png');
        top: 250px;
        left: 240px;
      }

      &#item-3 {
        background-image: url('items/${query.random}-item-${3}.png');
        top: 340px;
        left: 440px;
      }

      &#item-4 {
        background-image: url('items/${query.random}-item-${4}.png');
        top: 250px;
        left: 640px;
      }

      &#item-5 {
        background-image: url('items/${query.random}-item-${5}.png');
        top: 340px;
        left: 840px;
      }

      p {
        -webkit-text-stroke: 3px #242546;
        color: white;
        font-size: 56px;
        font-weight: 700;
      }
    `

    const ForwardArrow = styled.div`
      width: 400px;
      background-image: url('/arrow-asc.png');
      height: 70px;
      background-repeat: no-repeat;
      background-size: initial;
      margin: 40px 0 20px;
      display: flex;
      align-items: center;

      p {
        -webkit-text-stroke: 2px #242546;
        color: white;
        font-size: 40px;
        font-weight: 700;
        margin: 0 40px;
      }
    `

    const BackArrow = styled.div`
      width: 400px;
      background-image: url('/arrow-desc.png');
      height: 70px;
      background-repeat: no-repeat;
      background-size: initial;
      margin: 40px 0 20px auto;
      display: grid;
      align-items: center;

      p {
        -webkit-text-stroke: 2px #242546;
        color: white;
        font-size: 40px;
        font-weight: 700;
        margin: 0 40px;
      }
    `

    const DropArea = styled.div`
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 900px;
      height: 240px;
      margin: 0 auto;
      background-image: url('bullets/bullets-${query.random}.png');
      background-repeat: no-repeat;
      background-size: initial;
    `
    const ItemBox = styled.div`
      width: 160px;
      height: 160px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 200px;
    `

    // arrays to render
    let [arr, setArr] = useState<number[]>([])
    let [numArr, setNumArr] = useState<Array<string|number>>([])

    // filling arr
    function fillArray() {
        let newArray = []
        for (let x = 0; x <= query.amount; x++) {
            newArray.push(x + 1)
        }
        setArr(newArray)
    }

    useEffect(() => {
        if (arr.length === 0) {
            if (!Boolean(query.random) || !Boolean(query.values) || !Boolean(query.amount)) { // redirect if props missing
                window.location.replace('/')
            }
            fillArray()
        }
    }, [])

    // recursive loop to generate nums
    const dict = ['А','Б','Е','К','Ю']
    function loopRandom() {
        let max = (() => {
            if (query.values !== 0) {
                switch (query.values) {
                    case 1:
                        return 4
                    case 2:
                        return 9
                    case 3:
                        return 19
                    case 4:
                        return 50
                    case 5:
                        return 99
                    case 6:
                        return 999
                    default:
                        return 9
                }
            }
        })()
        let min = (() => {
            if (query.values !== 0) {
                switch (query.values) {
                    case 1:
                        return 0
                    case 2:
                        return 1
                    case 3:
                        return 10
                    case 4:
                        return 20
                    case 5:
                        return 51
                    case 6:
                        return 100
                }
            }
        })()

        // filling nums
        let newArrayNums: Array<string|number> = []
        const loop = (loopArray: Array<string|number>): number | string| void => {
            let num = Math.floor(Math.random() * (max! - min! + 1) + min!)
            if (loopArray.indexOf(num) === -1 && loopArray.indexOf(dict[num]) === -1) {
                if (query.values !== 1) {
                    return num
                } else {
                    return dict[num]
                }
            } else {
                return loop(loopArray)
            }
        }
        for (let x = 0; x <= query.amount; x++) {
            newArrayNums.push(loop(newArrayNums)!)
        }
        setNumArr(newArrayNums)
    }

    useEffect(() => {
        if (numArr.length === 0) {
            loopRandom()
        }
    }, [])

    const correctOrder: Array<string|number> = query.type ? numArr.map(i => i).sort().reverse() : numArr.map(i => i).sort()
    console.log('correct order:', correctOrder)

    // DND logic
    let dragEl = useMemo(() => '', [])

    function StartDrag(e: any) {
        e.dataTransfer.setData("text", e.currentTarget.id)
        dragEl = e.currentTarget.id
    }

    function Drop(e: any) {
        e.currentTarget.append(document.getElementById(dragEl))
        Check()
    }

    // success popup logic
    let [popup, setPopup] = useState(false)

    function Check() {
        let elArrays = []
        for (let i = 1; i <= arr.length; i++) {
            elArrays.push(document.getElementById(`item-box-${i}`)!.innerText)
        }
        elArrays = elArrays.map(i => i)
        console.log(elArrays)
        let result = true
        for (let x in elArrays) {
            if (elArrays[x] != correctOrder[x]) {
                result = false
            }
        }
        if (result) {
            setPopup(true)
        }
    }

    return (
        <>
            <HeaderComponent/>
            <Wrapper>
                <DragArea>
                    {
                        arr.map(i => {
                            return (
                                <DragBox
                                    id={`drag-box-${i}`}
                                    key={`drag-box--${i}`}
                                    onDragOver={(e) => {
                                        e.preventDefault()
                                    }}
                                    onDrop={(e) => {
                                        Drop(e)
                                    }}
                                >
                                    <Item
                                        id={`item-${i}`}
                                        key={`item-key-${i}`}
                                        draggable={true}
                                        onDrag={(e) => {
                                            StartDrag(e)
                                        }}
                                    >
                                        <p>{numArr[i - 1]}</p>
                                    </Item>
                                </DragBox>
                            )
                        })
                    }
                </DragArea>
                {
                    query.type === 0
                        ? <ForwardArrow><p>По возрастанию</p></ForwardArrow>
                        : <BackArrow><p>По убыванию</p></BackArrow>
                }
                <DropArea>
                    {
                        arr.map(i => {
                            return (
                                <ItemBox
                                    id={`item-box-${i}`}
                                    key={`item-key-${i}`}
                                    onDragOver={(e) => {
                                        e.preventDefault()
                                    }}
                                    onDrop={(e) => {
                                        Drop(e)
                                    }}
                                >
                                </ItemBox>
                            )
                        })
                    }
                </DropArea>
            </Wrapper>
            {
                (popup)
                    ? <Popup></Popup>
                    : []
            }
        </>
    )
}

export default Game