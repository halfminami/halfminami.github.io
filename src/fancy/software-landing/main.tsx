import { Card } from "./card";
import { CodeBox } from "./codeBox";
import { CoolButton } from "./coolButton";
import { ScreenBox } from "./screenBox";
import { SwitchContent } from "./switchContent";

const textLinearGradient = (c0: string, c1: string) => ({
  background: `linear-gradient(120deg, ${c0}, ${c1})`,
  webkitTextFillColor: "transparent",
  webkitBackgroundClip: "text",
  backgroundClip: "text",
});

function Main() {
  return (
    <>
      <ScreenBox>
        <div className="grid21">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              sint.
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
          <div>
            <CodeBox>npm run dev</CodeBox>
          </div>
        </div>
      </ScreenBox>

      <ScreenBox>
        <div className={"grid11"}>
          <div>
            <h1>Hic, odit autem! Enim, doloremque.</h1>
            <h2>
              Facere, quia aut ipsam numquam neque eos similique itaque nisi.
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
          <div>
            <SwitchContent
              contents={[
                {
                  switch: <CoolButton>one</CoolButton>,
                  content: (
                    <CodeBox title="powershell">kill -Name Code</CodeBox>
                  ),
                },
                {
                  switch: <CoolButton>two</CoolButton>,
                  content: <CodeBox title="bash">go mod init</CodeBox>,
                },
                {
                  switch: <CoolButton>three</CoolButton>,
                  content: <CodeBox title="bash">npx expo start</CodeBox>,
                },
              ]}
            ></SwitchContent>
          </div>
        </div>
      </ScreenBox>

      <ScreenBox>
        <div>
          <h1>Quos temporibus architecto molestiae facilis!</h1>
          <h2>
            Quod ut cumque alias. Nisi incidunt impedit sapiente nesciunt
            suscipit.
          </h2>
          <p>
            Totam provident perspiciatis labore dolorem iure voluptatem
            consequatur officiis similique tenetur nisi praesentium cupiditate
            atque cumque corporis quasi voluptas, eligendi officia harum eos
            veritatis perferendis ipsum? Officiis pariatur in cum.
          </p>
          <p>
            Quibusdam ratione iure quidem deleniti voluptatum quod modi cum
            totam, magnam consequuntur asperiores inventore laboriosam accusamus
            recusandae illum accusantium. Suscipit doloribus dolorem ut
            inventore consequuntur tenetur consectetur eum, quisquam numquam.
          </p>
        </div>
      </ScreenBox>

      <ScreenBox>
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
