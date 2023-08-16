import CountDown from "@/components/CountDown";
import Image from "next/image";
import H2 from "@/components/H2";
import { dancingScript } from "@/helpers/fonts";
import ButtonHoverEffect from "@/components/ButtonHoverEffect";
import SectionLugar from 'css/Lugar.module.css';
import sectionRegalos from 'css/Regalos.module.css';
import sectionPrincipal from 'css/Principal.module.css';
import sectionConfirmacion from 'css/Confirmacion.module.css'
import ButtonGifts from "@/components/ButtonGifts";
import ShapeSections from "@/components/ShapeSections";

export default function Home() {
  return (
      <main>
          <section className={`relative ${sectionPrincipal.principal}`}>
              <div className={"min-h-screen flex justify-center items-center py-10"}>
                  <div className={"py-10 lg:py-20 lg:px-0 px-10"}>
                      <h1 className={`${dancingScript.className} text-center uppercase flex flex-col`}>
                          <span className={"text-4xl xl:text-5xl"}>¡Nos Casamos!</span>
                          <span className={"text-6xl xl:text-9xl capitalize block mb-2 mt-5"}>Quique</span>
                          <span className={"text-3xl xl:text-6xl block my-3"}>&</span>
                          <span className={"text-6xl xl:text-9xl capitalize block"}>Lili</span>
                      </h1>
                      <p className={`${dancingScript.className} text-center text-4xl mt-6`}><sub>...</sub>Tiempo y ocasión acontecen a todos.</p>
                      <section className={"py-10 lg:bg-transparent"}>
                          <H2 classes={"mt-5"}>Nos veremos en</H2>
                          <div className={"mt-8"}>
                              <CountDown />
                          </div>
                      </section>
                  </div>
              </div>
              <ShapeSections
                  place={'bottom'}
              />
          </section>
          <section id={"lugar"} className={SectionLugar.lugar}>
              <ShapeSections
                  horientation={'inverted'}
              />
              <div className={"container mx-auto px-5 py-28 flex flex-col xl:flex-row"}>
                  <div className={"xl:w-1/2 xl:pr-28 flex flex-col justify-between"}>
                      <div>
                          <H2 classes={"xl:text-left"}>Lugar</H2>
                          <p className={"mt-3"}>¡Hola! Estamos muy emocionados de poder compartir con vos este día tan esperado: <b className={"text-xl"}>¡Nuestra Boda!</b></p>
                          <p className={"mt-3"}>Por esto es que te Invitamos a ser parte de la ceremonia y de la fiesta en <strong>Campo Cristal Eventos</strong>. <br/>Te dejamos aquí debajo todos los datos que necesitas saber:</p>
                          <ul className={"mt-3 list-disc"}>
                              <li className={"mb-3"}>Fecha: <strong>Sábado 2 de Marzo de 2024 11:30 A.M.</strong></li>
                              <li className={"mb-3"}>Lugar: <strong>Víctor Juan Garino 6017, B1759 González Catán, Provincia de Buenos Aires</strong>.</li>
                              <li className={"mb-3"}><b>Estacionamiento incluido</b>.</li>
                          </ul>
                          <p className={"mt-3"}>Luego de la ceremonia, los invitamos al salón para compartir el almuerzo y mucho más. Estamos deseosos de poder disfrutar junto con ustedes de momentos inolvidables durante este día tan especial.</p>
                      </div>
                      <p className={"mt-3 text-xl mb-10 lg:mb-0"}>¡Los esperamos con un corazón lleno de gratitud!</p>
                  </div>
                  <div className={"xl:w-1/2 rounded"}>
                      <ul className={"grid grid-cols-2"}>
                          <li>
                              <Image
                                  src={"/assets/lugar/1.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 1"}
                                  className={"w-full rounded-tl-lg"}
                                  loading={'lazy'}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/2.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 2"}
                                  className={"w-full rounded-tr-lg"}
                                  loading={'lazy'}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/3.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 3"}
                                  className={"w-full rounded-bl-lg shadow-xl"}
                                  loading={'lazy'}
                              />
                          </li>
                          <li>
                              <Image
                                  src={"/assets/lugar/4.jpeg"}
                                  width={300}
                                  height={300}
                                  alt={"Foto del lugar 4"}
                                  className={"w-full rounded-br-lg shadow-xl"}
                                  loading={'lazy'}
                              />
                          </li>
                      </ul>
                  </div>
              </div>
              <ShapeSections
                  place={'bottom'}
                  fillType={"fill-gradient-pink"}
              />
          </section>
          <section id={"confirmar"} className={`py-28 lg:py-32 ${sectionConfirmacion.confirmar} relative`}>
              <ShapeSections
                  horientation={'inverted'}
                  fillType={"fill-gradient-pink"}
              />
              <H2>Queremos que estés presente</H2>
              <p className={"text-center mt-5 leading-tight"}>Por eso te pedimos que nos confirmes tu asistencia. <br className={"lg:block hidden"}/>A través de estos contactos</p>
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
              <ShapeSections
                  place={'bottom'}
                  fillType={"fill-gradient-pink"}
              />
          </section>
          <section id={"regalos"} className={`${sectionRegalos.regalos} relative py-10 lg:py-20 min-h-[60vh] flex`}>
              <ShapeSections
                  horientation={'inverted'}
                  fillType={"fill-gradient-pink"}
              />
            <div className={"container mx-auto px-5 flex flex-1 justify-center items-center"}>
                <div className={"w-fit mx-auto shadow-xl rounded bg-white p-10 my-auto"}>
                    <H2>Regalos</H2>
                    <p className={"text-center mt-3"} style={{ textWrap: 'balance' }}>Si quisieras hacernos un presente podés contribuir a través del CBU o alias</p>
                    <ButtonGifts
                        cbu={process.env.CBU_NUMBER}
                        alias={process.env.ALIAS}
                    />
                </div>
            </div>
          </section>
      </main>
  )
}
