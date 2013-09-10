fn main() {
  let args : ~[~str] = std::os::args();

  std::io::println("Hello " + args.tail().connect(" "));
}