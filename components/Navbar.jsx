import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../lib/context";

//Top navbar
export default function Navbar() {
 
    const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>
        {/** user is signed-in and has username */}
        {username && (
          <>
            <li>
              <Link href="/">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <picture>
                  <img src={'/hacker.png'} alt="" />
                </picture>
              </Link>
            </li>
          </>
        )}
        {/** user is not signed OR has not created username */}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">LOG IN</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
