import CountDown from "@/components/CountDown";
import Image from "next/image";
import H2 from "@/components/H2";
import { dancingScript } from "@/helpers/fonts";
import ButtonHoverEffect from "@/components/ButtonHoverEffect";
import SectionLugar from 'css/Lugar.module.css';

export default function Home() {
  return (
      <main>
          <div className={"min-h-screen flex justify-center items-center bg-rosita"}>
              <div className={"pb-10 pt-20 lg:py-10"}>
                  <h1 className={`${dancingScript.className} text-center uppercase flex flex-col`}>
                      <span className={"text-4xl xl:text-5xl"}>¡Nos Casamos!</span>
                      <span className={"text-6xl xl:text-9xl capitalize block mb-2 mt-5"}>Quique</span>
                      <span className={"text-3xl xl:text-6xl block my-3"}>&</span>
                      <span className={"text-6xl xl:text-9xl capitalize block"}>Lili</span>
                  </h1>
                  <p className={`${dancingScript.className} text-center text-4xl mt-6`}><sub>...</sub> Que tiempo y ocasión acontecen a todos.</p>
                  <section className={"py-10 lg:py-20 lg:bg-transparent"}>
                      <H2>Nos veremos en</H2>
                      <div className={"mt-10"}>
                          <CountDown />
                      </div>
                  </section>
              </div>
          </div>
          <section id={"lugar"} className={SectionLugar.lugar}>
              <div className={"container mx-auto px-5 py-10 lg:py-20 flex flex-col xl:flex-row"}>
                  <div className={"xl:w-1/2 xl:pr-32 flex flex-col justify-between"}>
                      <div>
                          <H2 classes={"xl:text-left"}>Lugar</H2>
                          <p className={"mt-3"}>Los invitamos a nuestra boda en <strong>Campo Cristal Eventos</strong>. Estamos emocionados de compartir este día tan especial en nuestras vidas. <strong>La fecha es el sábado 2 de marzo de 2024</strong>, y nos encantaría que se unieran a nosotros en <b>Victor Juan Garino 6017, B1759 González Catán, Provincia de Buenos Aires</b>. Para aquellos que se preguntan acerca de la distancia desde la ciudad de Buenos Aires, el lugar se encuentra a unos 30 kilómetros de la capital, tomando la ruta 3.</p>
                          <p className={"mt-3"}><strong>La ceremonia comenzará a las 12:00 horas, pero los invitamos a unirse a nosotros a las 11:30 horas para disfrutar de un tiempo previo a la ceremonia.</strong> Después, a las 13:30 horas, daremos paso a la entrada en el salón, donde nos deleitaremos con una exquisita comida y momentos inolvidables. El código de vestimenta es elegante, el novio vestirá un traje gris, les pedimos que simplemente disfruten de esta maravillosa ocasión con nosotros. Prepárense para un día lleno de amor, risas y tiempos inolvidables.</p>
                      </div>
                      <p className={"mt-3 text-xl mb-10 lg:mb-0"}>¡Los esperamos con un corazón lleno de gratitud!</p>
                  </div>
                  <div className={"xl:w-1/2 shadow-lg rounded"}>
                      <ul className={"grid grid-cols-2"}>
                          <li>
                              <Image
                                  src={"/assets/lugar/1.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 1"}
                                  className={"w-full rounded-tl-lg"}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/2.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 2"}
                                  className={"w-full rounded-tr-lg"}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/3.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 3"}
                                  className={"w-full rounded-bl-lg shadow-xl"}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/4.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 4"}
                                  className={"w-full rounded-br-lg shadow-xl"}
                              />
                          </li>
                      </ul>
                  </div>
              </div>
          </section>
          <section id={"confirmar"} className={"py-20 lg:py-32 bg-verde"}>
              <H2>Queremos que estés presente</H2>
              <p className={"text-center mt-3 leading-tight"}>Por eso te pedimos que nos confirmes tu asistencia. <br className={"lg:block hidden"}/>Confirmanos tu asistencia por cualquiera de estos 2 medios</p>
              <ul className={"mt-10 flex xl:gap-x-10 gap-x-5 w-fit mx-auto"}>
                  <li className={"uppercase tooltip"} datatype={"Quique"}>
                      <ButtonHoverEffect
                          text={"Quique"}
                          url={process.env.QUIQUE_LINK}
                      />
                  </li>
                  <li className={"uppercase tooltip"} datatype={"Lili"}>
                      <ButtonHoverEffect
                          text={"Lili"}
                          url={process.env.LILI_LINK}
                      />
                  </li>
              </ul>
          </section>
          <section id={"regalos"} className={"py-10 container mx-auto px-5"}>
              <H2>Regalos</H2>
              <p className={"text-center"}>Si quisieras hacernos un presente podés contribuir a través del CBU</p>
              <button type={"button"}>Regalos</button>
          </section>
      </main>
  )
}
