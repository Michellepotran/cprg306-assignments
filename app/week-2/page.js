import Heading from "./student-info.js";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Heading />
        <ul>
            <li>
                <Link href="https://github.com/Michellepotran/cprg306-assignments"> GitHub </Link>
            </li>
        </ul>
      </main>
    );
  }