import { render } from "preact";

export const timelineTitle = "Profile thing";
function Index() {
  return (
    <ul>
      <li>
        <a href="/fancy/timeline.html">{timelineTitle}</a>
        <p>something like social media profile. vertically long images</p>
      </li>
    </ul>
  );
}

function mnt(id: string) {
  render(<Index></Index>, document.getElementById(id)!);
}

export { Index, mnt };
