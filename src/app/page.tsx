export default function Home() {
  return (
    <main className="flex flex-col  items-center min-h-screen max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold p-8">Tower of Hanoi </h1>
      <div className="w-full">
        <div className="px-8 pb-8">
          <h1 className="font-bold mb-2">What is Tower of Hanoi?</h1>
          <p className="indent-8 text-justify">
            The Tower of Hanoi is a classic puzzle or mathematical game that
            consists of three pegs and a number of disks of different sizes,
            which can slide onto any peg. The game starts with all the disks
            stacked in ascending order of size on one peg, with the largest disk
            at the bottom and the smallest at the top. The objective of the game
            is to move the entire stack of disks from one peg to another.
          </p>
        </div>
        <div className="px-8 pb-8">
          <h1 className="font-bold">Rules:</h1>
          <ul className="list-disc px-8">
            <li>Only one disk can be moved at a time.</li>
            <li>
              A disk can only be moved if it is the uppermost disk on a stack.
            </li>
            <li>A larger disk cannot be placed on top of a smaller disk.</li>
            <li>
              The goal is to move all the disks from the starting peg to the
              destination peg, using the third peg as an auxiliary, following
              the above rules.
            </li>
          </ul>
        </div>
      </div>
      {/* Layout */}
      <div className="grid grid-cols-3 h-[50vh] w-full gap-1">
        <div className="border border-black w-full h-full text-center">
          Start
        </div>
        <div className="border border-black w-full h-full"></div>
        <div className="border border-black w-full h-full text-center">
          End
        </div>
      </div>
    </main>
  );
}
