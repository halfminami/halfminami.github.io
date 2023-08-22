import { Card } from "./card";
import { CodeBox } from "./codeBox";
import { CoolButton } from "./coolButton";
import { ScreenBox } from "./screenBox";
import { SwitchContent } from "./switchContent";

function Main() {
  return (
    // <div className={"screenbox-wrapper"}>
    <>
      <ScreenBox>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, sint.
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          nemo aut quas rerum, sed repellat aliquam nihil eligendi corporis
          dicta explicabo sit ratione iste excepturi ducimus accusantium, dolore
          hic maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          maiores minus. Voluptatum quibusdam, dolorem modi nisi autem expedita
          odit culpa voluptates repellendus assumenda nobis reprehenderit
          nostrum esse corrupti adipisci cumque.
        </p>
        <CodeBox>npm run dev</CodeBox>
      </ScreenBox>

      <ScreenBox>
        <h1>Hic, odit autem! Enim, doloremque.</h1>
        <h2>Facere, quia aut ipsam numquam neque eos similique itaque nisi.</h2>
        <p>
          Sint harum maxime culpa molestiae fuga expedita natus fugit iste autem
          illo nulla odio reprehenderit quos sit delectus mollitia dolorem, quas
          cupiditate quae. Accusantium perferendis nam totam, soluta dicta
          voluptatem.
        </p>
        <p>
          Sed recusandae optio voluptatibus mollitia a illo, vitae odio quidem
          maxime eaque rerum illum cupiditate, quod neque ab nemo tenetur
          commodi perferendis aliquam. Repudiandae quos at sit dolore voluptates
          doloribus.
        </p>
        <SwitchContent
          contents={[
            {
              switch: <CoolButton>one</CoolButton>,
              content: <CodeBox title="powershell">kill -Name Code</CodeBox>,
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
      </ScreenBox>

      <ScreenBox>
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
          Quibusdam ratione iure quidem deleniti voluptatum quod modi cum totam,
          magnam consequuntur asperiores inventore laboriosam accusamus
          recusandae illum accusantium. Suscipit doloribus dolorem ut inventore
          consequuntur tenetur consectetur eum, quisquam numquam.
        </p>
      </ScreenBox>

      <ScreenBox>
        <h1>Fugit sequi unde totam ullam.</h1>
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
              Repudiandae in at corrupti corporis. Iure facere aspernatur nemo
              dolores?
            </p>
            <CodeBox>python3 -m http.server 8888 --bind localhost</CodeBox>
          </article>
        </Card>
        <Card>
          <article>
            <h1>Aperiam, recusandae amet.</h1>
            <p>
              Nostrum qui fugit reprehenderit magnam unde rerum quidem, vitae
              optio?
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
              In voluptatum minus aut ad. Velit provident cupiditate suscipit
              iste.
            </p>
            <CodeBox>git push origin main</CodeBox>
          </article>
        </Card>
        <Card>
          <article>
            <h1>Obcaecati, rerum facilis!</h1>
            <p>
              Illo esse laudantium autem earum quasi. Rem explicabo similique
              odio?
            </p>
            <CodeBox>dotnet run</CodeBox>
          </article>
        </Card>
      </ScreenBox>
    </>
    // </div>
  );
}

export { Main };
