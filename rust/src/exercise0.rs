fn main() {
  let args : ~[~str] = std::os::args();

  std::io::println("hello " + args.tail().connect(" "));
}