import React, { useEffect } from "react"
import BallOne from "../assets/Peça 1 - Bolinha.webp"
import BallTwo from "../assets/Peça 2 - Bolinha.webp"
import BallThree from "../assets/Peça 3 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import Gift from "../assets/Peça 1 - Presente Fechado.webp"
import { Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = ({}) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallOne} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw" }}>Atualização de cadastro</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.7vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </PaperBall>
            <PaperBall>
                <img src={BallTwo} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw" }}>Indicação de amigos</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </PaperBall>
            <PaperBall>
                <img src={BallThree} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw" }}>Agende a entrega</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </PaperBall>
            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", fontSize: "3.8vw", textAlign: "left" }}>
                    Siga os passos ao lado
                </p>
                <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.{" "}
                </p>

                <ButtonBongrano
                    sx={{ alignSelf: "end" }}
                    onClick={() => {
                        navigate("../signup")
                    }}
                >
                    <img src={Gift} style={{ width: "10vw" }} />
                    Começar
                </ButtonBongrano>
            </PaperBall>
        </Box>
    )
}