import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
            <ul className="menu-bar">
              <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
              <li><Link legacyBehavior href="/about"><a>About</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
              <li><Link legacyBehavior href="/blog"><a>Blog</a></Link></li>
              <li><Link legacyBehavior href="/product"><a>Product</a></Link></li>
            </ul>
          </nav>
    </>
  )
}

export default Navbar;
