import "../css/home.css";
import refs from "../js/refs.js";

const { home } = refs;

const homeTitle = document.createElement("h2");

homeTitle.textContent = "HOUSE";

const homeContent = document.createElement("p");

let content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae non facilis, odio aliquam eaque maiores, accusantium nemo aliquid dicta voluptas magnam error recusandae atque, explicabo ipsa impedit excepturi labore at! Ipsam voluptatem sed blanditiis ratione earum repellendus hic obcaecati, cumque, fugiat, asperiores consequuntur? Nihil deleniti omnis, dolores porro eligendi fugiat delectus necessitatibus totam perspiciatis magnam nemo aspernatur! Officiis velit sed laboriosam vero reprehenderit voluptatibus molestiae aut voluptas recusandae commodi ipsam rerum quis nemo nam aspernatur quaerat impedit expedita vel ad, beatae facilis quidem sunt, soluta officia! Omnis repellendus quibusdam fugit, natus ad id ipsa dignissimos enim eveniet ratione ducimus recusandae esse itaque sed ullam sequi odit tenetur aut. Repellendus necessitatibus suscipit consectetur eveniet repellat obcaecati reiciendis, ipsa temporibus maxime placeat, cumque iusto assumenda, ad distinctio facere fuga quis accusantium provident inventore. Omnis quas ut quam quis, mollitia enim ex! Rem amet dolores, beatae et dolorem odit laudantium, aperiam impedit omnis sapiente nulla eveniet magni repellat ducimus at quidem sunt maiores in, officiis magnam? Deserunt recusandae minus repellat animi asperiores vero, eligendi facilis nesciunt excepturi officiis ut vitae esse quos accusantium odit debitis. A in iure accusantium blanditiis neque hic commodi, architecto vitae non qui? Et nihil asperiores temporibus! Magni!";

homeContent.textContent = content;

home.append(homeTitle, homeContent);
