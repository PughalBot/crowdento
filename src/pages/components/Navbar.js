import { motion } from "framer-motion";

const Navbar = () => {
  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav className="p-4 sticky top-0 bg-white dark:bg-black">
      <ul className="flex space-x-4">
        <li>
          <button onClick={() => handleScroll("hero")} className="text-black dark:text-white">Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")} className="text-black dark:text-white">About</button>
        </li>
        <li>
          <button onClick={() => handleScroll("events")} className="text-black dark:text-white">Events</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")} className="text-black dark:text-white">Contact</button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
