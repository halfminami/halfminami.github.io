import { Card } from "./card";
import { CodeBox } from "./codeBox";
import { CoolButton } from "./coolButton";
import { ScreenBox } from "./screenBox";
import { SwitchContent } from "./switchContent";
import { Branch } from "./branch";

const textLinearGradient = (c0: string, c1: string) => ({
  background: `linear-gradient(120deg, ${c0}, ${c1})`,
  webkitTextFillColor: "transparent",
  webkitBackgroundClip: "text",
  backgroundClip: "text",
});

function Main() {
  return (
    <>
      <Branch></Branch>
      <ScreenBox className="scrollhidden">
        <div className="grid" style={{ gridTemplateColumns: "2fr auto 1fr" }}>
          <div>
            <h1>
              Lorem ipsum{" "}
              <span style={textLinearGradient("skyblue", "#4848ff")}>
                dolor
              </span>{" "}
              <span style={textLinearGradient("hotpink", "#9934ff")}>sit</span>{" "}
              <span style={textLinearGradient("yellowgreen", "#1acc1a")}>
                amet
              </span>
              .
            </h1>
            <h2>
              <em>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
                sint.
              </em>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              nemo aut quas rerum, sed repellat aliquam nihil eligendi corporis
              dicta explicabo sit ratione iste excepturi ducimus accusantium,
              dolore hic maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maiores minus. Voluptatum quibusdam, dolorem modi nisi
              autem expedita odit culpa voluptates repellendus assumenda nobis
              reprehenderit nostrum esse corrupti adipisci cumque.
            </p>
          </div>
          {/* svg branch circle point */}
          <div className="point"></div>
          <div
            className="scrollhidden delay grid"
            style={{
              width: "90%",
              // height: "90%",
              gridTemplateColumns: "1fr",
              justifyContent: "center",
            }}
          >
            <CodeBox title="gnomesort.go" className="prog">
              <span>
                <span className={"k"}>package</span>&nbsp;gnome
              </span>
              <span></span>
              <span>
                <span className={"k"}>func</span>
                &nbsp;GnomeSort&#91;T&nbsp;<span className={"t"}>any</span>
                &#93;&#40;arr&nbsp;&#91;&#93;<span className={"t"}>T</span>
                ,&nbsp;less&nbsp;<span className={"k"}>func</span>
                &#40;<span className={"t"}>T</span>,&nbsp;
                <span className={"t"}>T</span>&#41;&nbsp;
                <span className={"t"}>bool</span>&#41;&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={"k"}>for</span>
                &nbsp;i&nbsp;:=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;len&#40;arr&#41;-1;&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={"k"}>if</span>
                &nbsp;less&#40;arr&#91;i&#93;,&nbsp;arr&#91;i+1&#93;&#41;&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&nbsp;
                <span className={"k"}>else</span>&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap&#91;
                <span className={"t"}>T</span>
                &#93;&#40;arr,&nbsp;i,&nbsp;i+1&#41;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={"k"}>if</span>
                &nbsp;i&nbsp;==&nbsp;0&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&nbsp;
                <span className={"k"}>else</span>&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i--
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
              <span>&#125;</span>
              <span></span>
              <span>
                <span className={"k"}>func</span>
                &nbsp;swap&#91;T&nbsp;<span className={"t"}>any</span>
                &#93;&#40;arr&nbsp;&#91;&#93;<span className={"t"}>T</span>
                ,&nbsp;i1&nbsp;<span className={"t"}>int</span>,&nbsp;i2&nbsp;
                <span className={"t"}>int</span>&#41;&nbsp;&#123;
              </span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;...</span>
              <span>&#125;</span>
            </CodeBox>
          </div>
        </div>
      </ScreenBox>

      <ScreenBox className="scrollhidden">
        <div className={"grid"} style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <div>
            <h1>Hic, odit autem! Enim, doloremque.</h1>
            <h2>
              <em>
                Facere, quia aut ipsam numquam neque eos similique itaque nisi.
              </em>
            </h2>
            <p>
              Sint harum maxime culpa molestiae fuga expedita natus fugit iste
              autem illo nulla odio reprehenderit quos sit delectus mollitia
              dolorem, quas cupiditate quae. Accusantium perferendis nam totam,
              soluta dicta voluptatem.
            </p>
            <p>
              Sed recusandae optio voluptatibus mollitia a illo, vitae odio
              quidem maxime eaque rerum illum cupiditate, quod neque ab nemo
              tenetur commodi perferendis aliquam. Repudiandae quos at sit
              dolore voluptates doloribus.
            </p>
          </div>
          <div className="point"></div>
          <div
            className={"scrollhidden delay"}
            style={{ width: "100%", height: "100%" }}
          >
            <SwitchContent
              contents={[
                {
                  renderSwitch: (p) => (
                    <CoolButton
                      style={{ margin: "var(--pad)" }}
                      {...{ props: { ...p } }}
                    >
                      one
                    </CoolButton>
                  ),
                  content: (
                    <div
                      className="scrollhidden delay"
                      style={{
                        width: "90%",
                        //  height: "90%"
                      }}
                    >
                      <CodeBox title="bash">
                        <span className={"bash"}>go mod init</span>
                      </CodeBox>
                    </div>
                  ),
                },
                {
                  renderSwitch: (p) => (
                    <CoolButton
                      style={{ margin: "var(--pad)" }}
                      {...{ props: { ...p } }}
                    >
                      two
                    </CoolButton>
                  ),
                  content: (
                    <div
                      className="scrollhidden delay"
                      style={{
                        width: "90%",
                        //  height: "90%"
                      }}
                    >
                      <CodeBox
                        title="powershell"
                        style={{ backgroundColor: "#012456" }}
                      >
                        <span className={"powershell"}>
                          <span className={"v"}>kill</span>{" "}
                          <span className={"p"}>-Name</span> <span>Code</span>
                        </span>
                      </CodeBox>
                    </div>
                  ),
                },
                {
                  renderSwitch: (p) => (
                    <CoolButton
                      style={{ margin: "var(--pad)" }}
                      {...{ props: { ...p } }}
                    >
                      three
                    </CoolButton>
                  ),
                  content: (
                    <div
                      className="scrollhidden delay"
                      style={{
                        width: "90%",
                        //  height: "90%"
                      }}
                    >
                      <CodeBox title="bash">
                        <span className={"bash"}>npx expo start</span>
                      </CodeBox>
                    </div>
                  ),
                },
              ]}
              renderSwitchContainer={({ children }) => (
                <div
                  style={{
                    gridTemplateColumns: "repeat(3,auto)",
                    margin: "var(--pad)",
                    justifyContent: "center",
                  }}
                  className={"grid"}
                >
                  {children}
                </div>
              )}
              style={{
                gridTemplateColumns: "1fr",
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
              className="grid"
            ></SwitchContent>
          </div>
        </div>
      </ScreenBox>

      <ScreenBox className="scrollhidden">
        <div
          className={"grid"}
          style={{
            gridTemplateColumns: "auto auto",
            gridTemplateRows: "auto auto",
            gridAutoFlow: "column",
            position: "relative",
          }}
        >
          <div className={"blobbywrapper scrollhidden delay"}>
            <div className={"blobby"}></div>
            <div className={"blobby"}></div>
          </div>
          <div>
            <h1>Quos temporibus architecto molestiae facilis!</h1>
            <h2>
              <em>
                Quod ut cumque alias. Nisi incidunt impedit sapiente nesciunt
                suscipit.
              </em>
            </h2>
            <p>
              Totam provident perspiciatis labore dolorem iure voluptatem
              consequatur officiis similique tenetur nisi praesentium cupiditate
              atque{" "}
              <em>
                cumque corporis quasi voluptas, eligendi officia harum eos
                veritatis
              </em>{" "}
              perferendis ipsum? <em>Officiis pariatur in cum.</em>
            </p>
            <p>
              Quibusdam ratione iure quidem deleniti voluptatum quod modi cum
              totam, magnam consequuntur asperiores inventore laboriosam
              accusamus recusandae illum accusantium. Suscipit doloribus dolorem
              ut inventore consequuntur tenetur consectetur eum, quisquam
              numquam.
            </p>
          </div>
          {/* dummy for grid */}
          <div></div>
          <div className="point"></div>
        </div>
      </ScreenBox>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div></div>
        <div className="point" style={{ margin: "auto" }}></div>
      </div>

      <ScreenBox className="scrollhidden">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "fit-content",
              marginLeft: "0",
              marginRight: "0",
            }}
          >
            <h1>Fugit sequi unde totam ullam.</h1>
          </div>
          <div
            style={{
              overflow: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              // flex and border-box
              maxWidth:
                "calc(var(--_card-wid) * var(--_card-maxcol) + var(--pad) * var(--_card-maxcol) * 2)",
              justifyContent: "center",
            }}
          >
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("hotpink", "slateblue")}
                >
                  rocket_launch
                </span>
                <h1>Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, reprehenderit?
                </p>
                <CodeBox>echo $?</CodeBox>
              </article>
            </Card>
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("yellowgreen", "dodgerblue")}
                >
                  language
                </span>
                <h1>Non, autem architecto.</h1>
                <p>
                  Repudiandae in at corrupti corporis. Iure facere aspernatur
                  nemo dolores?
                </p>
                <CodeBox>python3 -m http.server 8888 --bind localhost</CodeBox>
              </article>
            </Card>
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("gold", "peru")}
                >
                  science
                </span>
                <h1>Aperiam, recusandae amet.</h1>
                <p>
                  Nostrum qui fugit reprehenderit magnam unde rerum quidem,
                  vitae optio?
                </p>
                <CodeBox>./a.out</CodeBox>
              </article>
            </Card>
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("lightsalmon", "tomato")}
                >
                  rebase
                </span>
                <h1>Dolore, sunt porro?</h1>
                <p>
                  Assumenda at aliquam voluptatibus totam nam obcaecati, velit
                  praesentium soluta?
                </p>
                <CodeBox>dune build</CodeBox>
              </article>
            </Card>
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("hotpink", "crimson")}
                >
                  import_contacts
                </span>
                <h1>Iusto, quaerat laboriosam!</h1>
                <p>
                  In voluptatum minus aut ad. Velit provident cupiditate
                  suscipit iste.
                </p>
                <CodeBox>git push origin main</CodeBox>
              </article>
            </Card>
            <Card>
              <article>
                <span
                  class="material-symbols-outlined"
                  aria-hidden="true"
                  style={textLinearGradient("cyan", "cadetblue")}
                >
                  data_object
                </span>
                <h1>Obcaecati, rerum facilis!</h1>
                <p>
                  Illo esse laudantium autem earum quasi. Rem explicabo
                  similique odio?
                </p>
                <CodeBox>dotnet run</CodeBox>
              </article>
            </Card>
          </div>
        </div>
      </ScreenBox>
    </>
  );
}

export { Main };
